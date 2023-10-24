const { userModel } = require("../models/user")
const passport = require("passport")
const router = require("express").Router()
const facebookStrategy = require("passport-facebook").Strategy

// serialize(from json data to a serie of strings) and deserialize user(from a serie of strings to a json data)
passport.serializeUser((user, done) => {
  done(null, user.id)
})
passport.deserializeUser((id, done) => {
  userModel.findById(id).then((user) => {
    done(null, user)
  })
})

// Facebook OAuth Strategy
passport.use(
  new facebookStrategy(
    {
      clientID: process.env.FACEBOOK_ID_CLIENT,
      clientSecret: process.env.FACEBOOK_ID_SECRET,
      callbackURL:
        "https://moussabakat-ramadan-2-0.onrender.com/api/auth/facebook/callback",
      profileFields: ["id", "displayName", "photos", "email"],
      scope: ["email", "public_profile"],
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
          email: profile.emails[0],
          authProvider: "facebook",
          profilPicture: profile.photos[0].value,
        })
        cb(null, newUser)
      }
    }
  )
)

router.get(
  "/",
  passport.authenticate("facebook", {
    scope: ["email", "public_profile"],
    successRedirect: "https://moussabakat-ramadan.com/Profil",
  })
)

router.get(
  "/callback",
  passport.authenticate("facebook", {
    successRedirect: "https://moussabakat-ramadan.com/Profil",
  }),
  (req, res) => {
    console.log(req.isAuthenticated())
    res.status(200).send(req.user)
    // console.log(req.user)
  }
)

//  route for successful logins
router.get("/login/success", (req, res) => {
  // console.log(req.user)
  if (req.user) {
    res.status(200).send(req.user)
  } else {
    res.status(404).send("no user connected with facebook account")
  }
})

// logout user from google strategy
router.get("/logout", (req, res) => {
  req.logout()
  req.session = null
  res.redirect("https://moussabakat-ramadan.com/Profil")
  //   res.send("logout with success")
})

module.exports = router
