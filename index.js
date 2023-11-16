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
    // origin: "https://moussabakat-ramadan.com",
    origin: "*",
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
app.use("/", (req, res) => res.send("hello world"))

app.use("/api/isAuthenticated", async (req, res) => {
  if (req.isAuthenticated()) {
    return res.status(200).send(req.user)
  } else {
    return res.status(404).send("utilisateur non connecter")
  }
})

// socket config
const io = new Server(server, {
  cors: {
    origin: "*",
    // credentials: true,
    // allowedHeaders: true,
  },
})

// socket io config
io.on("connection", (socket) => {
  console.log("a user connected " + socket.id)

  socket.on("join", (userId) => {
    socket.join(userId)
    console.log("user join the room " + userId)
    userConnections[userId] = socket.id
  })

  // message
  socket.on("message", (data) => {
    console.log(data)
    const { recipientId, message } = data
    io.to(recipientId).emit("receive:message", { sender: socket.id, message })
  })
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
})

cron.schedule("32 22 * * *", () => {
  // Réinitialiser les questions ici
  io.emit("questionReset", {
    q: "Question numéro 5 ",
  })
  console.log("mis a jour avec succeés ")
})

server.listen(port, () => {
  console.log(`Listening on port ${port}...`)
})

