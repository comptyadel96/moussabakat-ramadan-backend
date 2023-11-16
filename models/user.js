const mongoose = require("mongoose")

const userSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
    },
    nom: {
      type: String,
      maxLength: [100, "le nom ne peut pas dépasser 100 caractéres"],
      required: true,
      minLength: [4, "le nom doit avoir plus de 4 caractéres"],
    },
    prenom: {
      type: String,
      maxLength: [100, "le nom ne peut pas dépasser 100 caractéres"],
      // required: true,
      minLength: [4, "le prenom doit avoir plus de 4 caractéres"],
    },
    adresse: {
      type: String,
      maxLength: [300, "l'adresse ne peut pas dépasser 300 caractéres"],
      //   required: true,
      minLength: [10, "le nom doit avoir plus de 10 caractéres"],
    },
    numTel: {
      type: String,
      maxLength: [10, "le numéro ne peut pas dépasser 10 chiffres"],
      //   required: true,
      minLength: [10, "le nom doit avoir plus de 10 chiffres"],
      // unique: [true, "ce numéro de telephone a déja été utiliser"],
    },
    age: {
      type: String,
      maxLength: [2, "l'age ne peut pas dépasser 2 chiffres"],
      //   required: true,
      minLength: [1, "le nom doit avoir plus de 1 chiffre"],
    },
    email: {
      type: String,
      maxLength: [100, "l'email ne peut pas dépasser 100 caractéres"],
      //   required: true,
      minLength: [10, "l'email doit avoir plus de 10 caractéres"],
      unique: [true, "cette adresse mail a déja été utiliser"],
    },
    authProvider: String,
    profilPicture: String,
    hasCompletedProfile: {
      type: Boolean,
      default: false,
    },
    password: {
      type: String,
      default: null,
    },
    wilaya: String,
  },

  { timestamps: true }
)
const userModel = mongoose.model("User", userSchema)
module.exports = { userSchema, userModel }
