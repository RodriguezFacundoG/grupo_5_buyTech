function guestMiddleware (req, res, next) {
    if(!req.session.userLogged) {
        next();
    } else {
        res.send("Esta ruta es solo para invitados")
    }
    
}

module.exports = guestMiddleware;
