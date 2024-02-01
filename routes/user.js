const { tokenModel } = require("../models/tokens")
const { userModel } = require("../models/user")
const router = require("express").Router()
const questions = require("../utils/questions")
// const { getDailyQuestion } = require("../index")

const startDate = new Date("2024-01-11")

function getDailyQuestion(currentDate) {
  const timeDiff = Math.abs(currentDate.getTime() - startDate.getTime())
  const dayDifference = Math.ceil(timeDiff / (1000 * 3600 * 24))
  const questionIndex = (dayDifference - 1) % questions.length

  const simplifiedQuestion = {
    question: questions[questionIndex].question,
    propositions: questions[questionIndex].propositions.map((prop) => ({
      text: prop.text,
      isTrue: prop.isTrue, // Ajoutez cette ligne pour inclure la propriété isTrue
    })),
  }

  return simplifiedQuestion
  // return questions[questionIndex]
}

router.get("/currentUser", async (req, res) => {
  console.log(req.user)
  const currUser = await userModel.findOne({ userId: req.query.id })
  if (!currUser) {
    return res.status(404).send("aucun utilisteur trouver avec cet Id")
  }
  res.status(200).send(currUser)
})

router.put("/completeProfil", async (req, res) => {
  const { adresse, numTel, dateNaissance, lieuNaissance } = req.body
  const currUser = await userModel.findByIdAndUpdate(
    req.query._id,
    {
      adresse: adresse,
      numTel: numTel,
      dateNaissance,
      lieuNaissance,
      hasCompletedProfile: true,
    },
    { new: true }
  )
  if (!currUser) {
    return res.status(404).send("aucun utilisateur trouver avec cet id")
  }
  return res.status(200).send(currUser)
})

// répondre à la question du jour
router.post("/answerQuestion", async (req, res) => {
  const { userId, answer } = req.body

  // Récupérez l'utilisateur
  const user = await userModel.findOne({ userId: userId })

  // Vérifiez si l'utilisateur a déjà répondu aujourd'hui
  if (user.answeredToday) {
    return res.status(400).send("L'utilisateur a déjà répondu aujourd'hui.")
  }

  // Obtenez la question du jour
  const dailyQuestion = getDailyQuestion(new Date())
  const index = dailyQuestion.propositions.findIndex(
    (item) => item.text === answer
  )
  console.log(dailyQuestion.propositions[index].isTrue)
  // console.log(index)

  // Vérifiez la réponse
  if (dailyQuestion.propositions[index].isTrue) {
    // Réponse correcte, mettez à jour les scores
    user.score += 1
    user.weeklyScore += 1
    user.answeredToday = true
    await user.save()
    return res.json({ success: true, message: "réponse correcte" })

    // Vérifiez si l'utilisateur a atteint le score hebdomadaire nécessaire
    // if (user.weeklyScore + user.dailyScore >= 7) {
    //   // Tirage au sort hebdomadaire
    //   // Mettez à jour les scores, réinitialisez les marqueurs, etc.
    //   // ...
    // }
  } else {
    // Réponse incorrecte, gérer les questions secondaires si nécessaire
    // ...
    user.weeklyScore += 0
    user.answeredToday = true
    await user.save()
    res.json({ success: false, message: "réponse incorrecte" })
  }

  // Sauvegardez les modifications de l'utilisateur
  await user.save()

  res.status(200).send("Réponse traitée avec succès")
})

// add current phone token to send push notifs
router.post("/addToken", async (req, res) => {
  const { token } = req.body
  let tkns = await tokenModel.find({}, "-_id -__v")
  console.log(tkns)

  try {
    // Vérifiez si le token existe déjà dans la collection
    const existingToken = await tokenModel.findOne({ token })

    if (!existingToken) {
      // Si le token n'existe pas, créez un nouvel enregistrement dans la collection
      await tokenModel.create({ token })
      res.status(200).json({ message: "Token enregistré avec succès" })
    } else {
      res.status(200).json({ message: "Le token existe déjà" })
    }
  } catch (error) {
    console.error("Erreur lors de l'enregistrement du token :", error)
  }
})

module.exports = router
