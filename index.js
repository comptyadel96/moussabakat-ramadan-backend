const express = require("express")
const dotenv = require("dotenv").config("./env")
const app = express()
const port = process.env.PORT || 3000
// const cookieSession = require("cookie-session")
const session = require("express-session")
const passport = require("passport")
const cors = require("cors")
const auth = require("./routes/googleAuth")
const fbAuth = require("./routes/facebookAuth")
const localAuth = require("./routes/localAuth")
const user = require("./routes/user")
const { connectDb } = require("./utils/db")
const bodyParser = require("body-parser")
const checkCookies = require("./middlewares/checkCookies")
const questions = require("./utils/questions")
const https = require("https")
const server = https.createServer(app)
const { Server } = require("socket.io")
const cron = require("node-cron")
const { initializeApp } = require("firebase-admin/app")
var admin = require("firebase-admin")
const { userModel } = require("./models/user")
const startDate = new Date("2024-01-15")
connectDb()

// use cookie session to store the session in the browser
app.set("trust proxy", "loopback,3.75.158.163,3.125.183.140,35.157.117.28")

// app.set("trust proxy", 1)

app.use(express.urlencoded({ extended: true }))
app.use(express.json({ extended: true }))

app.use(
  session({
    secret: process.env.COOKIE_KEY,
    // resave: false,
    saveUninitialized: true,
    cookie: {
      secure: true,
      maxAge: 30 * 24 * 60 * 60 * 1000,
      sameSite: "none",
    },
  })
)

app.use(passport.initialize()) // initialize passport
app.use(passport.session()) // use the cookie to store the session
// app.use(checkCookies)
// set the cors
app.use(
  cors({
    // origin: "https://moussabakat-ramadan.com",
    origin: "https://moussabakat-ramadan.com",
    // origin: "*",
    credentials: true,
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  })
)
// middleware to parse the body of the request to json format and store it in req.body object
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json({ limit: "15mb" }))
app.use(express.json({ limit: "15mb" })) // limit the size of the body of the request to 500kb

app.use("/api/isAuthenticated", async (req, res) => {
  // console.log(req.user)
  // console.log("Session:", req.session)
  if (req.isAuthenticated()) {
    return res.status(200).send(req.user)
  } else {
    return res.status(404).send("utilisateur non connecter")
  }
})

app.use("/api/auth/google", auth) // mount the google auth routes
app.use("/api/auth/facebook", fbAuth) // fb o auth
app.use("/api/auth/localAuth", localAuth)
app.use("/api/user", user)
// app.use("/", (req, res) => res.send("hello haroun"))

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

// question du jour ...etc
app.get("/api/questiondujour", (req, res) => {
  try {
    const currentDate = new Date()
    const dailyQuestion = getDailyQuestion(currentDate)

    res.status(200).json(dailyQuestion)
  } catch (error) {
    console.error(
      "Erreur lors de la récupération de la question du jour :",
      error
    )
    res
      .status(500)
      .send("Erreur lors de la récupération de la question du jour")
  }
})

// socket config
const io = new Server(server, {
  cors: {
    origin: "*",
    credentials: true,
    allowedHeaders: true,
  },
})

// socket io config
io.on("connection", (socket) => {
  console.log("a user connected " + socket.id)
  // message
  // socket.on("message", (data) => {
  //   console.log(data)
  //   const { recipientId, message } = data
  //   io.to(recipientId).emit("receive:message", { sender: socket.id, message })
  // })

  // io.emit("message", "hello from backend")
  socket.on("disconnect", () => {
    console.log("user disconnected")
    // Supprimer l'entrée de connexion de l'utilisateur lorsqu'il se déconnecte
    // for (const userId in userConnections) {
    //   if (userConnections[userId] === socket.id) {
    //     delete userConnections[userId]
    //     break
    //   }
    // }
  })

  // Fonction pour diviser un tableau en lots
  function chunkArray(myArray, chunk_size) {
    var index = 0
    var arrayLength = myArray.length
    var tempArray = []

    for (index = 0; index < arrayLength; index += chunk_size) {
      var myChunk = myArray.slice(index, index + chunk_size)
      tempArray.push(myChunk)
    }

    return tempArray
  }

  // send notifications

  socket.on("sendNotif", async () => {
    console.log("received notif from frontend")
    let tkns = await tokenModel.find({}, "-_id -__v")
    const tokenArray = tkns.map((token) => token.token)

    // Divisez les tokens en lots de 500 tokens chacun
    const tokenBatches = chunkArray(tokenArray, 500)

    // Utilisez une boucle asynchrone pour envoyer les notifications par lots
    for (const batch of tokenBatches) {
      try {
        await admin.messaging().sendMulticast({
          tokens: batch,
          data: {
            notifee: JSON.stringify({
              body: "Nouvelle question du jour",
              android: {
                channelId: "Nouvelle-question",
                // color: "#00FFFFFF",
                actions: [
                  {
                    title: '<p style="color: #f44336;"><b>Plus tard</b></p>',
                    pressAction: {
                      id: "read",
                    },
                  },
                  {
                    title:
                      "<p style='color: #0ed15d;'><b>Répondre maintenant</b> &#x2713;</p>",
                    pressAction: {
                      id: "answer",
                    },
                  },
                ],
              },
            }),
          },
        })
        console.log("Notification batch sent successfully")
      } catch (error) {
        console.error("Error sending notification batch:", error)
      }
    }

    console.log("All notifications sent to clients")
  })
})

const serviceAccount = require("./moussabaat-ramadan-firebase-adminsdk-c7l4b-d60ef5cfda.json")
const { tokenModel } = require("./models/tokens")
// initializeApp(firebaseConfig)
initializeApp({
  credential: admin.credential.cert(serviceAccount),
})

cron.schedule(
  "55 23 * * *",
  async () => {
    // Réinitialisez le score quotidien et les marqueurs pour tous les utilisateurs
    await userModel.updateMany(
      {},
      {
        $set: {
          answeredToday: false,
          answeredSecondary: false,
          dailyScore: 0,
        },
      }
    )

    // Réinitialisez la question du jour, si nécessaire
    io.emit("questionReset", {
      q: "Nouvelle question du jour",
    })

    console.log("Réinitialisation hebdomadaire effectuée avec succès")
  },
  {
    timezone: "Africa/Algiers", // Fuseau horaire pour l'Algérie
  }
)
// Tâche cron pour réinitialiser le score hebdomadaire chaque semaine le dimanche à 00h00
cron.schedule("0 0 * * 0", async () => {
  try {
    // Réinitialisez le score hebdomadaire de tous les utilisateurs à zéro
    await userModel.updateMany({}, { weeklyScore: 0 })

    console.log(
      "Score hebdomadaire réinitialisé chaque semaine le dimanche à 00h00."
    )
  } catch (error) {
    console.error(
      "Erreur lors de la réinitialisation du score hebdomadaire :",
      error
    )
  }
})

server.listen(port, () => {
  console.log(`Listening on port ${port}...`)
})
