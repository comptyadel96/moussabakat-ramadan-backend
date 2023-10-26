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
      callbackURL:
        "https://moussabakat-ramadan-2-0.onrender.com/api/auth/google/callback",
      // "http://localhost:3000/api/auth/google/callback",

      scope: ["email", "profile"],
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
  "/callback",
  passport.authenticate("google", {
    successRedirect: "https://moussabakat-ramadan.com/Profil",
    // "http://localhost:5173/Profil",
  }),
  (req, res) => {
    res.send(req.user)
  }
)
//  route for successful logins
router.get("/login/success", (req, res) => {
  if (req.user) {
    res.status(200).send(req.user)
  } else {
    res.status(404).send("no user connected with google account")
  }
})

// logout user from google strategy
router.get("/logout", async (req, res) => {
  req.logout()
  req.session = null
  // res.redirect("http://localhost:5173/Login")
  res.redirect("https://moussabakat-ramadan.com/Login")
  // res.send("logout with success")
})

module.exports = router
