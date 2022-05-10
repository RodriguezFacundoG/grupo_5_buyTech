const session = require("express-session");
const fs = require('fs');
const path = require('path')

const db = require("../database/models")

function userLoggedMiddleware (req, res, next) {
    //res.locals son variables que puedo compartir entre las vistas, indistintamente del controlador if(req.session && req.session.userLogged)
    res.locals.isLogged = false;
    let emailInCookie = req.cookies.recordarEmail;
    
    if(req.cookies.recordarEmail) {
        db.User.findOne({           //Busco el usuario, en base al email de la cookie
            where: {
                email: emailInCookie,
            }
        })
            .then( userFromCookie => {
                req.session.userLogged = userFromCookie;    //si está en cookie, lo guardará en sesion al usuario.
            })        
    }       
    
    if(req.session.userLogged){     
        res.locals.isLogged = true;        
        res.locals.userLogged = req.session.userLogged;
        /*
        A continuación, otra forma de en la vistas, con el uso de locals.userLogged, user los datos del usuario en session
        De esta manera, no es necesario pasar la info como objeto en el metodo render().
        NOTE: res.locals is an object that contains response local variables scoped to the request and because of this,
        it is only available to the view(s) rendered during that request/response cycle
        */
    } 
    next();
}
module.exports = userLoggedMiddleware;