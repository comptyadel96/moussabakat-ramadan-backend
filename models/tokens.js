const mongoose = require("mongoose")

const tokenSchema = new mongoose.Schema({
  token: String,
})

const tokenModel = mongoose.model("Token", tokenSchema)
module.exports = { tokenModel }
