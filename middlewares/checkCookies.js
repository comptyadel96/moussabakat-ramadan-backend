module.exports = function checkCookies(req, res, next) {
  if (req.session) {
    console.log(req.session)
    // Les cookies sont activés, continuez vers la route suivante
    next()
  } else {
    // Les cookies sont désactivés, redirigez l'utilisateur vers une page d'activation des cookies ou fournissez des instructions.
    res
      .status(403)
      .send(
        "Veuillez activer les cookies pour utiliser l'authentification de ce site, allez dans les parametres de votre navigateur et autoriser notre site à utiliser les cookies "
      )
  }
}
