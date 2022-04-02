const session = require("express-session");

function userLoggedMiddleware (req, res, next) {
    res.locals.isLogged = false;    //res.locals son variables que puedo compartir entre las vistas, indistintamente del controlador
    if(req.session.userLogged){     //if(req.session && req.session.userLogged)
        res.locals.isLogged = true;
        /*
        A continuación, otra forma de en la vistas, con el uso de locals.userLogged, user los datos del usuario en session
        De esta manera, no es necesario pasar la info como objeto en el metodo render().
        res.locals is an object that contains response local variables scoped to the request and because of this,
        it is only available to the view(s) rendered during that request/response cycle
            res.locals.userLogged = req.session.userLogged;
        */
    } 
    next();
}

module.exports = userLoggedMiddleware;