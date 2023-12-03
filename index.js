const express = require("express")
const dotenv = require("dotenv").config("./env")
const app = express()
const port = process.env.PORT || 3000
const cookieSession = require("cookie-session")
const passport = require("passport")
const cors = require("cors")
const auth = require("./routes/googleAuth")
const fbAuth = require("./routes/facebookAuth")
const localAuth = require("./routes/localAuth")
const user = require("./routes/user")
const { connectDb } = require("./utils/db")
const bodyParser = require("body-parser")
const checkCookies = require("./middlewares/checkCookies")

const http = require("http")
const server = http.createServer(app)
const { Server } = require("socket.io")
const cron = require("node-cron")
const { initializeApp } = require("firebase-admin/app")
var admin = require("firebase-admin")

connectDb()
// use cookie session to store the session in the browser
app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days in miliseconds
    keys: [process.env.COOKIE_KEY], // key to encrypt the cookie
    secure: true,
    httpOnly: false,
    sameSite: "none",
  })
)
// app.set("trust proxy", "loopback,3.75.158.163,3.125.183.140,35.157.117.28")

app.use(passport.initialize()) // initialize passport
app.use(passport.session()) // use the cookie to store the session
app.use(checkCookies)
// set the cors
app.use(
  cors({
    origin: "https://moussabakat-ramadan.com",
    // origin: "*",
    credentials: true,
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  })
)

// app.use(function (req, res, next) {
//   // Website you wish to allow to connect
//   res.setHeader(
//     "Access-Control-Allow-Origin",
//     "https://moussabakat-ramadan.com"
//   )

//   // Request methods you wish to allow
//   res.setHeader(
//     "Access-Control-Allow-Methods",
//     "GET, POST, OPTIONS, PUT, PATCH, DELETE"
//   )

//   // Request headers you wish to allow
//   res.setHeader("Access-Control-Allow-Headers", "X-Requested-With,content-type")

//   // Set to true if you need the website to include cookies in the requests sent
//   // to the API (e.g. in case you use sessions)
//   res.setHeader("Access-Control-Allow-Credentials", true)

//   // Pass to next layer of middleware
//   next()
// })
// middleware to parse the body of the request to json format and store it in req.body object
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json({ limit: "15mb" }))
app.use(express.json({ limit: "15mb" })) // limit the size of the body of the request to 500kb

app.use("/api/auth/google", auth) // mount the google auth routes
app.use("/api/auth/facebook", fbAuth) // fb o auth
app.use("/api/auth/localAuth", localAuth)
app.use("/api/user", user)
app.use("/", (req, res) => res.send("hello haroun"))

app.use("/api/isAuthenticated", async (req, res) => {
  if (req.isAuthenticated()) {
   return  res.status(200).send(req.user)
  } else {
    return res.status(404).send("utilisateur non connecter")
  }
})

// socket config
const io = new Server(server, {
  // cors: {
  //   origin: "*",
  //   // credentials: true,
  //   // allowedHeaders: true,
  // },
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
  // socket.on("sendNotif", async () => {
  //   const message = {
  //     data: {
  //       notifee: JSON.stringify({
  //         body: "This message was sent via FCM!",
  //         android: {
  //           channelId: "Nouvelle question",
  //           actions: [
  //             {
  //               title: "Mark as Read",
  //               pressAction: {
  //                 id: "read",
  //               },
  //             },
  //           ],
  //         },
  //       }),
  //     },
  //     token:
  //       "cDVpTN2oQ5SC6W2Nmj_Lq5:APA91bERqYhP29vUcjfesJR7bJOwi4lm71hWXbiCyrcNmtHGVTSq-0ApVP3XkknOIOVjJ4w-wPiCMF5avxI-MOF5w8FeiS7Oxo6T_9anVfZU0ruCdlxVtf_8DS1g-tq7sPIKIWVmbVRD",
  //   }

  //   console.log("recieved notif from front end")
  //   let tokens = [
  //     "cDVpTN2oQ5SC6W2Nmj_Lq5:APA91bERqYhP29vUcjfesJR7bJOwi4lm71hWXbiCyrcNmtHGVTSq-0ApVP3XkknOIOVjJ4w-wPiCMF5avxI-MOF5w8FeiS7Oxo6T_9anVfZU0ruCdlxVtf_8DS1g-tq7sPIKIWVmbVRD",
  //   ]
  //   await admin
  //     .messaging()
  //     // .send(message)
  //     .sendEachForMulticast({
  //       tokens,
  //       data: {
  //         notifee: JSON.stringify({
  //           body: "Nouvelle question du jour",
  //           android: {
  //             channelId: "Nouvelle-question",
  //             actions: [
  //               {
  //                 title: "Marquer comme lu",
  //                 pressAction: {
  //                   id: "read",
  //                 },
  //               },
  //             ],
  //           },
  //         }),
  //       },
  //     })
  //   console.log("notification sent to client....")
  // })
  socket.on("sendNotif", async () => {
    const message = {
      data: {
        notifee: JSON.stringify({
          body: "This message was sent via FCM!",
          android: {
            channelId: "Nouvelle question",
            actions: [
              {
                title: "Mark as Read",
                pressAction: {
                  id: "read",
                },
              },
              {
                title: "Répondre maintenant",
                pressAction: {
                  id: "answer",
                },
              },
            ],
          },
        }),
      },
    }

    console.log("received notif from frontend")
    let tokens = [
      "cDVpTN2oQ5SC6W2Nmj_Lq5:APA91bERqYhP29vUcjfesJR7bJOwi4lm71hWXbiCyrcNmtHGVTSq-0ApVP3XkknOIOVjJ4w-wPiCMF5avxI-MOF5w8FeiS7Oxo6T_9anVfZU0ruCdlxVtf_8DS1g-tq7sPIKIWVmbVRD",
      // ... Ajoutez tous les tokens ici
    ]

    // Divisez les tokens en lots de 500 tokens chacun
    const tokenBatches = chunkArray(tokens, 500)

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
                actions: [
                  {
                    title: "Ignorer",
                    pressAction: {
                      id: "read",
                    },
                  },
                  {
                    title: "Répondre maintenant",
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

cron.schedule("32 22 * * *", () => {
  // Réinitialiser les questions ici
  io.emit("questionReset", {
    q: "Question numéro 6 ",
  })
  console.log("mis a jour avec succeés")
})

// firebase config
// const firebaseConfig = {
//   apiKey: "AIzaSyARv2iHtTqH-7fLJP29essiSBLud6cn9zE",
//   // authDomain: "VOTRE_AUTH_DOMAIN",
//   projectId: "moussabaat-ramadan",
//   // storageBucket: "VOTRE_STORAGE_BUCKET",
//   messagingSenderId: "1041379994550",
//   appId: "1:1041379994550:android:66439988d60c9bab582f17",
// }

const serviceAccount = require("./moussabaat-ramadan-firebase-adminsdk-c7l4b-d60ef5cfda.json")
// initializeApp(firebaseConfig)
initializeApp({
  credential: admin.credential.cert(serviceAccount),
})

server.listen(port, () => {
  console.log(`Listening on port ${port}...`)
})
