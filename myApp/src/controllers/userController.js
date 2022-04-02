const path = require('path');
const fs = require('fs');
const { validationResult } = require('express-validator');
const bcrypt = require('bcrypt');

//datos
const usersFilePath = path.join(__dirname, '../data/usersData.json');
let usersJSON = fs.readFileSync(usersFilePath, 'utf-8');

let users;              //Si está vacío, que en la variable users, ponga un array vacío, para despues
if (usersJSON == '') {  //poder agregarle varios objetos (cada uno un usuario)
    users = [];
} else {
    users = JSON.parse(usersJSON);
}

const userController = {

    login: (req, res) => {
        res.render('login');
    },
    loginProcess: (req, res) => {
        
        for (let userToLogin of users) {
            if (req.body.email == userToLogin.email) {
                let samePassword = bcrypt.compareSync(req.body.password, userToLogin.password)
                console.log(samePassword)
                if (!samePassword) { //Cambiar a if(samePassword) al terminar de hacer pruebas
                    delete userToLogin.password;
                    req.session.userLogged = userToLogin;
                    return res.redirect('/');                    
                }

                return res.render("login", {
                    errors: {
                        email: {
                            msg: "Credenciales inválidas"
                        }
                    }
                });
            }
        }

        return res.render('login', {
            errors: {
                email: {
                    msg: "Este email no está registrado"
                }
            }
        });

    },
    registerForm: (req, res) => {
        return res.render('register');
    },
    registerUpload: (req, res) => {
        let errors = validationResult(req);
        if (!errors.isEmpty()) {
            let userPass = req.body.user_password;
            let userPassVerification = req.body.user_password_verification;
            if (userPass !== userPassVerification) {
                let passComparitionMsg = 'Las contraseñas no coinciden';
                return res.render('register', { errors: errors.mapped(), old: req.body, passComparitionMsg: passComparitionMsg });
            };
            return res.render('register', { errors: errors.mapped(), old: req.body });

        } else {
            let userPass = req.body.user_password;
            let passEncripted = bcrypt.hashSync(req.body.user_password, 10);
            userPass = passEncripted;

            let newUser = req.body;
            newUser.id = users[users.length - 1].id + 1;
            users.push(newUser);
            let usersJSON = JSON.stringify(users);
            fs.writeFileSync(usersFilePath, usersJSON, 'utf-8');
            return res.redirect('/user/login');
        }

    },
    productCart: (req, res) => {
        //hacer un IF para que si el usuario está registrado o no, vaya a un lado especifico
        //hacer IF con sesion de usuario o redirigir a Register
        //hacer res.redirect a Login
        res.render('productCart')
    }
};

module.exports = userController;