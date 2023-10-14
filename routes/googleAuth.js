const { userModel } = require("../models/user")
const passport = require("passport")
var GoogleStrategy = require("passport-google-oauth20").Strategy
const router = require("express").Router()

// serialize(from json data to a serie of strings) and deserialize user(from a serie of strings to a json data)
passport.serializeUser((user, done) => {
  done(null, user.id)
})
passport.deserializeUser((id, done) => {
  userModel.findById(id).then((user) => {
    done(null, user)
  })
})

// Google OAuth Strategy
passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_ID_CLIENT,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: "http://localhost:3000/api/auth/google/redirect",
    },
    async (accessToken, refreshToken, profile, cb) => {
      console.log(profile)
      let currentUser = await userModel.findOne({ userId: profile.id })
      // check if user exists in db or not if not create new user and save to db else return user from db to passport
      if (currentUser) {
        return cb(null, currentUser)
      } else {
        console.log(profile)
        const newUser = await userModel.create({
          userId: profile.id,
          nom: profile.displayName,
          email: profile.emails[0].value,
          authProvider: "google",
          profilPicture: profile.photos[0].value,
        })
        cb(null, newUser)
      }
    }
  )
)
router.get(
  "/",
  passport.authenticate("google", {
    scope: ["profile", "email"],
  })
)
// handling the callback after google has authenticated the user
router.get(
  "/redirect",
  passport.authenticate("google", {
    successRedirect: "http://localhost:5173/Profil",
    //   "https://luminous-kulfi-f6211b.netlify.app/Profil",
  }),
  (req, res) => {
    // console.log(req.user)
    res.send(req.user)
    // console.log(req.user)
  }
)
//  route for successful logins
router.get("/login/success", (req, res) => {
  // console.log(req.user)
  if (req.user) {
    res.status(200).send(req.user)
  } else {
    res.status(404).send("no user connected with google account")
  }
})

// logout user from google strategy
router.get("/logout", (req, res) => {
  req.logout()
  req.session = null
  res.redirect("https://luminous-kulfi-f6211b.netlify.app")
  res.send("logout with success")
})

module.exports = router
