const bcrypt = require('bcrypt');
const fs = require('fs')
const path = require('path');

function loginAuth (req, res, next) {
    let usersJSON = fs.readFileSync(path.join(__dirname, "../data/usersData.json"));
    let users;
    //Si está vacío, que en la variable users, ponga un array vacío, para despues 
    //poder agregarle varios objetos (cada uno un usuario)
    if(usersJSON == ''){
        users = [];
    } else {
        users = JSON.parse(usersJSON);
    }
    
    for (let user of users) {
        if (req.body.email == user.email) {
            let samePassword = bcrypt.compareSync(req.body.password, user.password)
            
            if (samePassword) {    
                            
                req.session.userLogged = user;
                // res.render("user")
                break;                
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
    
    next();
}

module.exports = loginAuth;

