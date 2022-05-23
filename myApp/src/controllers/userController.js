const path = require('path');
const fs = require('fs');
const { validationResult } = require('express-validator');
const bcrypt = require('bcrypt');

const db = require("../database/models/index")
// Que es lo mismo que hacer require("../database/models") porque Javascript va a buscar siempre el archivo index

const userController = {

    loginForm: (req, res) => {
        return res.render('login');
    },

    loginProcess: (req, res) => {

        let errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.render('login', {errors: errors.mapped(), old: req.body})
        }

        db.User.findOne({
            where: {
                email: req.body.email
            }
        })
            .then((userToLogin) => {
                let samePassword = bcrypt.compareSync(req.body.password, userToLogin.password)
                console.log(samePassword)
                if (samePassword) { 
                    delete userToLogin.password;            //Borro el password antes de guardar el usuario en sesion para mayor seguridad
                    req.session.userLogged = userToLogin;   //creo la propiedad userLogged en el objeto global req.session
                    //Cookie
                    if (req.body.remember_me) {
                        res.cookie('recordarEmail', req.session.userLogged.email, { maxAge: 60000 });
                    }

                    return res.redirect('/');
                }

                return res.render("login", {
                    errors: {
                        email: {
                            msg: "Credenciales inválidas"
                        }
                    }
                });
            })
            
            .catch( () => { // Si quiero puedo captar el error como parámetro en el callback del catch        
                return res.render('login', { 
                    errors: {
                        email: {
                            msg: "Este email no está registrado"
                        }
                    }
                })
            });          

    },

     // Muestra formulario de creacion de usuario
    registerForm: (req, res) => {
        db.User_category.findAll()
        .then((categories) => {
          return res.render("register", {categories});
        })
    },

    registerUpload: async (req, res) => {
        let errors = validationResult(req);        
        let userPass = req.body.password;
        let userPassVerification = req.body.password_verification;
        //Si tiene errores sintácticos o las contraseñas no coinciden:
        // if (!errors.isEmpty() || userPass !== userPassVerification) {                   
        //     return res.render('register', { errors: errors.mapped(), old: req.body, passComparitionMsg: 'Las contraseñas no coinciden' });           
        // }            
        if ( !errors.isEmpty() ) {            
            return res.render('register', { errors: errors.mapped(), old: req.body });           
        }
        if (userPass !== userPassVerification) {                          
            return res.render('register', { old: req.body, errors: {
                                                                        password_verification: {
                                                                            msg: 'Las contraseñas no coinciden'
                                                                        }
                                                                    }
            });
        }            
        
        let passEncripted = bcrypt.hashSync(userPass, 10);        
        let newUser = {
            ...req.body,
            password: passEncripted,                
            avatar: req.file != undefined ? req.file.filename : 'user-solid.svg', //Solo agrega esta propíedad en caso de que se cree agregue una imagen, sino pone una por default
            user_category_id: 0,
        };
        delete newUser.password_verification;   //Necesito borrar el password que se verifica, porque no está hasheado    
        try{   
        await db.User.create(newUser);        
        return res.redirect("/");        
    }catch(error){
        console.log(error)
    }
    },

    productCart: (req, res) => {           
        return res.render('productCart')
    },

    logout: (req, res) => {
        res.clearCookie("recordarEmail");
        req.session.destroy();
        res.redirect('/');
    },

    /* Muestra el Perfil del Usuario */
    profile: (req, res) => {
        let idABuscar = req.params.id;
        db.User.findByPk(idABuscar)
          .then( (user) => {        
              return res.render("userProfile", { user: user });
          })     
    },

    /* Muestra el Formulario de Edición para el Usuario */
    edit: (req, res) => {
        let idABuscar = req.params.id;
        db.User.findByPk(idABuscar)
          .then( (user) => {        
              return res.render("userEdit", { user: user });
          })     
    },

    /* Actualiza los datos del Usuario */
    update: (req, res) => {
        db.User.update ({
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            email:req.body.email,
            password: req.body.password
        }, {
            where:{
                id: req.params.userId
            }
        })
        res.redirect('/users/profile'+ req.params.userId)
        }

    /*ACA ES EL METODO QUE PUSO JUANPA PARA PROBAR LA CONEXION A LA DB*/ 

    // listUsers: async (req, res) => {
    //     const users = await db.User.findAll();
    //     return res.send(users)
    // }
};

module.exports = userController;
