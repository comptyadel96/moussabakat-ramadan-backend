const { tokenModel } = require("../models/tokens");
const { userModel } = require("../models/user");
const router = require("express").Router();

router.get("/currentUser", async (req, res) => {
  console.log(req.user);
  const currUser = await userModel.findOne({ userId: req.query.id });
  if (!currUser) {
    return res.status(404).send("aucun utilisteur trouver avec cet Id");
  }
  res.status(200).send(currUser);
});

router.put("/completeProfil", async (req, res) => {
  const { adresse, numTel, age, hasCompletedProfile } = req.body;
  const currUser = await userModel.findByIdAndUpdate(
    req.query._id,
    {
      adresse: adresse,
      numTel: numTel,
      age: age,
      hasCompletedProfile: true,
    },
    { new: true }
  );
  if (!currUser) {
    return res.status(404).send("aucun utilisateur trouver avec cet id");
  }
  return res.status(200).send(currUser);
});

// modify user score
router.put("/submit", async (req, res) => {
  const { scoreH, scoreT } = req.body;
});
// add current phone token to send push notifs
router.post("/addToken", async (req, res) => {
  const { token } = req.body;
  let tkns = await tokenModel.find({}, "-_id -__v");
  console.log(tkns);

  try {
    // Vérifiez si le token existe déjà dans la collection
    const existingToken = await tokenModel.findOne({ token });

    if (!existingToken) {
      // Si le token n'existe pas, créez un nouvel enregistrement dans la collection
      await tokenModel.create({ token });
      res.status(200).json({ message: "Token enregistré avec succès" });
    } else {
      res.status(200).json({ message: "Le token existe déjà." });
    }
  } catch (error) {
    console.error("Erreur lors de l'enregistrement du token :", error)
  }
});

module.exports = router;
