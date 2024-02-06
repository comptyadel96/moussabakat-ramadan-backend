const mongoose = require("mongoose")

const userSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      unique: [true, "identificateur déja utiliser"],
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
      unique: [true, "ce numéro de telephone a déja été utiliser"],
    },
    dateNaissance: {
      type: String,
      maxLength: [
        80,
        "la date de naissance ne peut pas dépasser 80 caractéres",
      ],
    },
    lieuNaissance: {
      type: String,
      maxLength: [
        200,
        "lieu de naissance ne peut pas contenir plus que 200 lettres/chiffres",
      ],
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
      maxLength: [
        100,
        "le mot de passe ne peut pas contenir plus de 100 caractéres",
      ],
      minLength: [6, "le mot de passe doit contenir aumoins 6 caractéres"],
    },
    wilaya: {
      type: String,
      minLength: [3, "la wilaya doit contenir aumoins 3 caractéres"],
      maxLength: [80, "la wilaya ne peut pas contenir plus de 80 caractéres "],
    },
    sexe: { type: String, enum: ["féminin", "masculin"] },
    score: {
      type: Number,
      default: 0,
    },
    weeklyScore: {
      type: Number,
      default: 0,
    },
    dailyScore: {
      type: Number,
      default: 0,
    },
    lastResetDate: Date,
    answeredToday: { type: Boolean, default: false },

    answeredSecondary: Boolean,
    deviceToken: {
      type: String,
    },
    answeredQuestions: [String],
  },

  { timestamps: true }
)
const userModel = mongoose.model("User", userSchema)
module.exports = { userSchema, userModel }
