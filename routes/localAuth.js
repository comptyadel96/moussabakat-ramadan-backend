const bcrypt = require("bcrypt")
const saltRounds = 10
const { userModel } = require("../models/user")
const passport = require("passport")
const router = require("express").Router()
const LocalStrategy = require("passport-local").Strategy

// serialize(from json data to a serie of strings) and deserialize user(from a serie of strings to a json data)
passport.serializeUser((user, done) => {
  done(null, user.id)
})
passport.deserializeUser((id, done) => {
  userModel.findById(id).then((user) => {
    done(null, user)
  })
})

passport.use(
  new LocalStrategy(
  
    {
      usernameField: "email",
      passwordField: "password",
      // passReqToCallback: true,
    },
    async (username, password, done) => {
      const currUser = await userModel.findOne({ email: username })

      if (!currUser) {
        return done(null, false, {
          message: "Aucun utilisateur enregistrer avec cet email",
        })
      }

      // Vérifier le mot de passe
      bcrypt.compare(password, currUser.password, (err, isMatch) => {
        if (err) {
          return done(err)
        }
        if (isMatch) {
          return done(null, currUser)
        } else {
          return done(null, false, {
            message: "Nom d'utilisateur ou mot de passe incorrecte",
          })
        }
      })
    }
  )
)

// router.post("/register", async (req, res) => {
//   try {
//     const {
//       nom,
//       prenom,
//       adresse,
//       numTel,
//       email,
//       dateNaissance,
//       lieuNaissance,
//       hasCompletedProfile,
//       authProvider,
//       password,
//       sexe,
//     } = req.body
//     bcrypt.hash(password, saltRounds, async (err, hashedPassword) => {
//       if (err) {
//         console.error("Erreur lors du hashage du mot de passe :", err)
//         // return res.redirect("https://moussabakat-ramadan.com/Profil")
//       }
//       const newUser = await userModel.create({
//         nom,
//         prenom,
//         adresse,
//         numTel,
//         email,
//         dateNaissance,
//         lieuNaissance,
//         sexe,
//         hasCompletedProfile,
//         authProvider,
//         password: hashedPassword,
//       })
//       res.status(200).send(newUser)
//     })
//   } catch (error) {
//     console.log(error)
//   }
// }) 

router.post("/register", async (req, res) => {
  try {
    const {
      nom,
      prenom,
      adresse,
      numTel,
      email,
      dateNaissance,
      lieuNaissance,
      hasCompletedProfile,
      authProvider,
      password,
      sexe,
    } = req.body
    bcrypt.hash(password, saltRounds, async (err, hashedPassword) => {
      if (err) {
        console.error("Erreur lors du hashage du mot de passe :", err)
        // return res.redirect("https://moussabakat-ramadan.com/Profil")
      }
      const newUser = await userModel.create({
        nom,
        prenom,
        adresse,
        numTel,
        email,
        dateNaissance,
        lieuNaissance,
        sexe,
        hasCompletedProfile,
        authProvider,
        password: hashedPassword,
      })

      // Remplir userId avec _id lors de la création
      newUser.userId = newUser._id.toString()
      await newUser.save()

      res.status(200).send(newUser)
    })
  } catch (error) {
    console.log(error)
    res.status(500).send("Erreur lors de la création de l'utilisateur")
  }
})


router.post("/login", (req, res, next) => {
  passport.authenticate("local", (err, user, info) => {
    if (err) {
      return next(err)
    }
    if (!user) {
      return res
        .status(400)
        .json({ message: "Nom d'utilisateur ou mot de passe incorrecte" })
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
  res.redirect("https://moussabakat-ramadan.com/Login")
})

module.exports = router
