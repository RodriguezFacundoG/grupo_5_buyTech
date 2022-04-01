function userLoggedMiddleware (req, res, next) {
    res.locals.isLogged = false;    //res.locals son variables que puedo compartir entre las vistas, indistintamente del controlador
    if(req.session.userLogged){
        res.locals.isLogged = true;
    } 
    next();
}

module.exports = userLoggedMiddleware;