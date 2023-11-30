const { userModel } = require("../models/user")
const router = require("express").Router()

router.get("/currentUser", async (req, res) => {
  const currUser = await userModel.findOne({ userId: req.query.id })
  if (!currUser) {
    return res.status(404).send("aucun utilisteur trouver avec cet Id")
  }
  res.status(200).send(currUser)
})

router.put("/completeProfil", async (req, res) => {
  const { adresse, numTel, age, hasCompletedProfile } = req.body
  const currUser = await userModel.findByIdAndUpdate(
    req.query._id,
    {
      adresse: adresse,
      numTel: numTel,
      age: age,
      hasCompletedProfile: hasCompletedProfile,
    
    },
    { new: true }
  )
  if (!currUser) {
    return res.status(404).send("aucun utilisateur trouver avec cet id")
  }
  return res.status(200).send(currUser)
})

// modify user score  
router.put("/submit", async (req, res) => {
  const {scoreH, scoreT } = req.body
})

module.exports = router
