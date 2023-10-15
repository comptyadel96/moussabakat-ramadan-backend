const bcrypt = require("bcrypt")
const saltRounds = 10
const { userModel } = require("../models/user")
const passport = require("passport")
const router = require("express").Router()
const LocalStrategy = require("passport-local").Strategy


passport.use(
  new LocalStrategy((username, password, done) => {
    User.findOne({ username: username }, (err, user) => {
      if (err) {
        return done(err)
      }
      if (!user) {
        return done(null, false, { message: "Incorrect username." })
      }

      // Vérifier le mot de passe
      bcrypt.compare(password, user.password, (err, isMatch) => {
        if (err) {
          return done(err)
        }
        if (isMatch) {
          return done(null, user)
        } else {
          return done(null, false, { message: "Incorrect password." })
        }
      })
    })
  })
)

router.post("/register", async (req, res) => {
  const {
    nom,
    adresse,
    numTel,
    email,
    age,
    hasCompletedProfile,
    authProvider,
    userId,
    password,
  } = req.body
  bcrypt.hash(password, saltRounds, (err, hashedPassword) => {
    if (err) {
      console.error("Erreur lors du hashage du mot de passe :", err)
      return res.redirect("http://localhost:5173/Profil")
    }
    userModel.create({
      nom,
      adresse,
      numTel,
      email,
      age,
      hasCompletedProfile,
      authProvider,
      userId,
      password: hashedPassword,
    })
    res.redirect("https://moussabakat-ramadan.com/Profil")
  })
})

router.post("/login", async (req, res) => {
  passport.authenticate("local", {
    successRedirect: "https://moussabakat-ramadan.com/Profil",
    failureRedirect: "/login",
    failureFlash: true,
  }),
    (req, res) => {
      // Redirection après connexion réussie
      res.redirect("https://moussabakat-ramadan.com/Profil")
    }
})

router.get("/logout", async (req, res) => {
  req.logOut()
  req.session = null
  res.redirect("https://moussabakat-ramadan.com/Profil")
})

module.exports = router
