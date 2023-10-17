const bcrypt = require("bcrypt")
const saltRounds = 10
const { userModel } = require("../models/user")
const passport = require("passport")
const router = require("express").Router()
const LocalStrategy = require("passport-local").Strategy 

passport.serializeUser(function (user, cb) {
  process.nextTick(function () {
    cb(null, { id: user.id, username: user.username })
  })
})

passport.deserializeUser(function (user, cb) {
  process.nextTick(function () {
    return cb(null, user)
  })
})

passport.use(
  new LocalStrategy(
    { usernameField: "email", passReqToCallback: true },
    (req, username, password, done) => {
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
            return done(null, false, {
              message: "Nom d'utilisateur ou mot de passe incorrecte",
            })
          }
        })
      })
    }
  )
)

router.post("/register", async (req, res) => {
  try {
    const {
      nom,
      adresse,
      numTel,
      email,
      age,
      hasCompletedProfile,
      authProvider,
      password,
    } = req.body
    bcrypt.hash(password, saltRounds, async (err, hashedPassword) => {
      if (err) {
        console.error("Erreur lors du hashage du mot de passe :", err)
        // return res.redirect("https://moussabakat-ramadan.com/Profil")
      }
      const newUser = await userModel.create({
        nom,
        adresse,
        numTel,
        email,
        age,
        hasCompletedProfile,
        authProvider,
        password: hashedPassword,
      })
      res.status(200).send(newUser)
      // res.redirect("https://moussabakat-ramadan.com/Profil")
    })
  } catch (error) {
    console.log(error)
  }
})

// router.post("/login", async (req, res) => {
//   passport.authenticate("local", {
//     successRedirect: "https://moussabakat-ramadan.com/Profil",
//     // failureRedirect: "/login",
//     // failureFlash: true,
//   }),
//     (req, res) => {
//       // Redirection après connexion réussie
//       res.redirect("https://moussabakat-ramadan.com/Profil")
//     }
// })

router.post("/login", (req, res, next) => {
  passport.authenticate("local", (err, user, info) => {
    if (err) {
      return next(err)
    }
    if (!user) {
      return res
        .status(400)
        .json({ message: "Incorrect username or password." })
    }
    req.logIn(user, (err) => {
      if (err) {
        return next(err)
      }
      res.status(200).send(user)
    })
  })(req, res, next)
})

router.get("/logout", async (req, res) => {
  req.logOut()
  req.session = null
  res.redirect("https://moussabakat-ramadan.com/Profil")
})

module.exports = router
