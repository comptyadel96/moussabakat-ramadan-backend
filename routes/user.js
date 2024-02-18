const { tokenModel } = require("../models/tokens")
const { userModel } = require("../models/user")
const router = require("express").Router()
const questions = require("../utils/questions")
const RTLArabic = require("rtl-arabic")
const startDate = new Date("2024-01-15")

function getDailyQuestion(currentDate) {
  const timeDiff = Math.abs(currentDate.getTime() - startDate.getTime())
  const dayDifference = Math.ceil(timeDiff / (1000 * 3600 * 24))
  const questionIndex = (dayDifference - 1) % questions.length

  const simplifiedQuestion = {
    id: questions[questionIndex].id,
    question: questions[questionIndex].question,
    propositions: questions[questionIndex].propositions.map((prop) => ({
      text: prop.text,
      isTrue: prop.isTrue, // Ajoutez cette ligne pour inclure la propriété isTrue
    })),
  }

  return simplifiedQuestion
}

// avoir toutes les questions précédentes
function getAllQuestionsUntilToday(currentDate) {
  const timeDiff = Math.abs(currentDate.getTime() - startDate.getTime())
  const dayDifference = Math.ceil(timeDiff / (1000 * 3600 * 24))

  const allQuestions = []

  for (let i = 0; i < dayDifference; i++) {
    const questionIndex = i % questions.length
    allQuestions.push({
      id: questions[questionIndex].id,
      question: questions[questionIndex].question,
      propositions: questions[questionIndex].propositions.map((prop) => ({
        text: prop.text,
        // isTrue: prop.isTrue, // Ajoutez cette ligne pour inclure la propriété isTrue
      })),
      questionsSecondaires: questions[questionIndex].questionsSecondaires.map(
        (props) => ({
          id: props.id,
          question: props.question,
          propositions: props.propositions,
        })
      ),
    })
  }

  return allQuestions
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
// router.post("/answerQuestion", async (req, res) => {
//   const { userId, answer } = req.body

//   // Récupérez l'utilisateur
//   const user = await userModel.findOne({ userId: userId })

//   // Vérifiez si l'utilisateur a déjà répondu aujourd'hui
//   if (user.answeredToday) {
//     return res.status(400).send("L'utilisateur a déjà répondu aujourd'hui.")
//   }

//   // Obtenez la question du jour
//   const dailyQuestion = getDailyQuestion(new Date())
//   const index = dailyQuestion.propositions.findIndex(
//     (item) => item.text === answer
//   )
//   // console.log(dailyQuestion.propositions[index].isTrue)
//   // console.log(index)

//   // Vérifiez la réponse
//   if (dailyQuestion.propositions[index].isTrue) {
//     // Réponse correcte, mettez à jour les scores
//     user.score += 1
//     user.weeklyScore += 1
//     user.answeredToday = true
//     await user.save()
//     return res.json({ success: true, message: "réponse correcte" })

//     // Vérifiez si l'utilisateur a atteint le score hebdomadaire nécessaire
//     // if (user.weeklyScore + user.dailyScore >= 7) {
//     //   // Tirage au sort hebdomadaire
//     //   // Mettez à jour les scores, réinitialisez les marqueurs, etc.
//     //   // ...
//     // }
//   } else {
//     // Réponse incorrecte, gérer les questions secondaires si nécessaire
//     // ...
//     user.weeklyScore += 0
//     user.answeredToday = true
//     await user.save()
//     res.json({ success: false, message: "réponse incorrecte" })
//   }

//   // Sauvegardez les modifications de l'utilisateur
//   await user.save()

//   res.status(200).send("Réponse traitée avec succès")
// })
router.post("/answerQuestion", async (req, res) => {
  try {
    const { userId, answer } = req.body

    // Récupérez l'utilisateur
    const user = await userModel.findOne({ userId })

    // Obtenez la question du jour
    const dailyQuestion = getDailyQuestion(new Date())

    // Vérifiez si l'utilisateur a déjà répondu à la question du jour
    if (
      user.answeredQuestions.some(
        (item) => item.questionId === dailyQuestion.id
      )
    ) {
      return res
        .status(400)
        .send("Vous avez déjà répondu à la question du jour.")
    }

    // Vérifiez si la réponse est valide
    const index = dailyQuestion.propositions.findIndex(
      (item) => item.text === answer
    )
    if (index === -1) {
      return res.status(400).send("La réponse fournie n'est pas valide.")
    }

    const isAnswerCorrect = dailyQuestion.propositions[index].isTrue

    // Mettez à jour les scores et les réponses de l'utilisateur
    user.score += isAnswerCorrect ? 1 : 0
    user.weeklyScore += isAnswerCorrect ? 1 : 0
    user.dailyScore += isAnswerCorrect ? 1 : 0
    user.answeredQuestions.push({
      questionId: dailyQuestion.id,
      isAnswerCorrect,
    })
    user.answeredToday = true
    await user.save()

    return res.json({
      success: isAnswerCorrect,
      message: isAnswerCorrect ? "Réponse correcte." : "Réponse incorrecte.",
    })
  } catch (error) {
    console.error("Erreur lors de la réponse à la question du jour :", error)
    return res
      .status(500)
      .send("Erreur lors de la réponse à la question du jour.")
  }
})

// répondre à la question du jour
// router.post("/answerQuestion", async (req, res) => {
//   const { userId, answer } = req.body

//   // Récupérez l'utilisateur
//   const user = await userModel.findOne({ userId: userId })

//   // Vérifiez si l'utilisateur a déjà répondu aujourd'hui
//   if (user.answeredToday) {
//     return res.status(400).send("L'utilisateur a déjà répondu aujourd'hui.")
//   }

//   // Obtenez la question du jour
//   const dailyQuestion = getDailyQuestion(new Date())
//   const index = dailyQuestion.propositions.findIndex(
//     (item) => item.text === answer
//   )

//   // Ajoutez l'ID de la question à la liste des questions auxquelles l'utilisateur a répondu
//   user.answeredQuestions.push(dailyQuestion.id)

//   // new Set(user.answeredQuestions)

//   // Vérifiez la réponse
//   if (dailyQuestion.propositions[index].isTrue) {
//     // Réponse correcte, mettez à jour les scores
//     user.score += 1
//     user.weeklyScore += 1
//     user.dailyScore += 1
//     user.answeredToday = true
//     await user.save()
//     return res.json({ success: true, message: "réponse correcte" })
//   } else {
//     // Réponse incorrecte, gérer les questions secondaires si nécessaire
//     // ...
//     user.weeklyScore += 0
//     user.answeredToday = true
//     await user.save()
//     return res.json({ success: false, message: "réponse incorrecte" })
//   }
// })

// Récupérer le statut des questions pour un utilisateur ( savoir les questions auxquelles il a répondu et les autres dont il n'a pas encore répondu)
router.get("/questionsStatus", async (req, res) => {
  try {
    const { userId } = req.query

    // Récupérez l'utilisateur
    const user = await userModel.findOne({ userId })

    if (!user) {
      return res.status(404).send("Aucun utilisateur trouvé avec cet ID.")
    }

    // Obtenez toutes les questions jusqu'à aujourd'hui
    const allQuestions = getAllQuestionsUntilToday(new Date())

    // Créez un tableau avec le statut de chaque question
    // const userAnsweredQuestionIds = user.answeredQuestions.map(
    //   (answer) => answer
    // )

    // const unansweredQuestions = allQuestions.filter(
    //   (q) => !userAnsweredQuestionIds.includes(q.id.toString()) // Convertissez l'ID en chaîne pour la comparaison
    // )

    res.status(200).json({ allQuestions })
  } catch (error) {
    console.error(
      "Erreur lors de la récupération du statut des questions :",
      error
    )
    res
      .status(500)
      .send("Erreur lors de la récupération du statut des questions")
  }
})

// Répondre à une question spécifique (y compris les questions précédentes)
// router.post("/answerSpecificQuestion", async (req, res) => {
//   try {
//     const { userId, questionId, answer } = req.body

//     // Récupérez l'utilisateur
//     const user = await userModel.findOne({ userId })

//     // Vérifiez si l'utilisateur a déjà répondu à cette question
//     if (user.answeredQuestions.includes(questionId)) {
//       return res
//         .status(400)
//         .send("L'utilisateur a déjà répondu à cette question.")
//     }

//     // Obtenez la question spécifique
//     const selectedQuestion = questions.find(
//       (question) => question.id == questionId
//     )

//     // Vérifiez si la question existe
//     if (!selectedQuestion) {
//       return res.status(404).send("Question non trouvée.")
//     }

//     // Vérifiez si la question est la question du jour
//     const currentDate = new Date()
//     const dayDifference = Math.ceil(
//       (currentDate.getTime() - startDate.getTime()) / (1000 * 3600 * 24)
//     )
//     const expectedQuestionId = (dayDifference - 1) % questions.length
//     if (selectedQuestion.id !== expectedQuestionId) {
//       return res
//         .status(400)
//         .send("Vous ne pouvez pas répondre à cette question pour le moment.")
//     }

//     // Vérifiez la réponse
//     const index = selectedQuestion.propositions.findIndex(
//       (item) => item.text === answer
//     )
//     if (index === -1) {
//       return res.status(400).send("La réponse fournie n'est pas valide.")
//     }

//     const isAnswerCorrect = selectedQuestion.propositions[index].isTrue

//     // Mettez à jour les scores et les réponses de l'utilisateur
//     user.score += isAnswerCorrect ? 1 : 0
//     user.weeklyScore += isAnswerCorrect ? 1 : 0
//     user.dailyScore += isAnswerCorrect ? 1 : 0
//     user.answeredQuestions.push({ questionId, isAnswerCorrect })
//     await user.save()

//     return res.json({
//       success: isAnswerCorrect,
//       message: isAnswerCorrect ? "Réponse correcte." : "Réponse incorrecte.",
//     })
//   } catch (error) {
//     console.error(
//       "Erreur lors de la réponse à une question spécifique :",
//       error
//     )
//     return res
//       .status(500)
//       .send("Erreur lors de la réponse à une question spécifique.")
//   }
// })
// Répondre à une question spécifique (y compris les questions précédentes)

router.post("/answerSpecificQuestion", async (req, res) => {
  try {
    const { userId, questionId, answer } = req.body

    // Récupérez l'utilisateur
    const user = await userModel.findOne({ userId })

    // Vérifiez si l'utilisateur a déjà répondu à cette question
    const alreadyAnswered = user.answeredQuestions.some(
      (item) => item.questionId === questionId
    )

    if (alreadyAnswered) {
      return res.status(400).send("Vous avez déjà répondu à cette question")
    }

    // Obtenez la question spécifique
    const dailyQuestion = getDailyQuestion(new Date())
    const allQuestions = getAllQuestionsUntilToday(new Date())
    const selectedQuestion = allQuestions.find(
      (question) => question.id === questionId
    )

    // Vérifiez si la question existe
    if (!selectedQuestion) {
      return res.status(404).send("Question non trouvée.")
    }
    const options = {
      harakat: true,
      numbers: false,
      multiline: true,
    }

    let convertedText = new RTLArabic(answer, options).convert()
    console.log(convertedText)
    // if (selectedQuestion.id > dailyQuestion.id) {
    //   return res
    //     .status(400)
    //     .send("Vous ne pouvez pas répondre à cette question pour le moment.")
    // }

    // Vérifiez la réponse
    const index = dailyQuestion.propositions.findIndex(
      (item) => item.text.ar === answer || item.text.fr === answer
    )
    if (index === -1) {
      return res.status(400).send("La réponse fournie n'est pas valide.")
    }

    const isAnswerCorrect = dailyQuestion.propositions[index].isTrue

    // Mettez à jour les scores et les réponses de l'utilisateur
    user.score += isAnswerCorrect ? 1 : 0
    user.weeklyScore += isAnswerCorrect ? 1 : 0
    user.dailyScore += isAnswerCorrect ? 1 : 0
    user.answeredQuestions.push({ questionId, isAnswerCorrect })
    await user.save()

    return res.json({
      success: isAnswerCorrect,
      message: isAnswerCorrect ? "Réponse correcte." : "Réponse incorrecte.",
    })
  } catch (error) {
    console.error(
      "Erreur lors de la réponse à une question spécifique :",
      error
    )
    return res
      .status(500)
      .send("Erreur lors de la réponse à une question spécifique.")
  }
})

// ajouter un point et marquer la réponse principale comme juste si il répond juste à 3 questions secondaires
router.post("/addPoint", async (req, res) => {
  const { questionId, userId } = req.body
  const user = await userModel.findOne({ userId })
  if (!user) {
    return res.status(404).send("aucun utilisateur retrouver")
  }
  const currentQuestion = user.answeredQuestions.find(
    (question) => question.questionId == questionId
  )
  if (!currentQuestion) {
    return res
      .status(404)
      .send("aucun question retrouver avec cet identificateur" + questionId)
  }
  currentQuestion.isAnswerCorrect = true
  user.score += 1
  user.weeklyScore += 1
  await user.save()
  res.status(200).send("point récuperer avec succées")
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
