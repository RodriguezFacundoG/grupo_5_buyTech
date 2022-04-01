function guestMiddleware (req, res, next) {
    if(!req.session.userLogged) {
        next();
    } else {
        res.send("Debes loguearte para entrar a esta URL")
    }
    
}

module.exports = guestMiddleware;
