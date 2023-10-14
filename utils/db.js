const mongoose = require("mongoose")

const connectDb = () => {
  try {
    const db = mongoose
      .connect(
        "mongodb+srv://adoula136:moussabakat-ramadan2.0@ramadancluster.iviy0um.mongodb.net/?retryWrites=true&w=majority"
      )
      .then((currDb) => console.log("successfully connected to mongoDb"))
  } catch (error) {
    console.log(error)
  }
}
module.exports = { connectDb }
