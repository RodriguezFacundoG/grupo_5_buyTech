const fs = require('fs')
const path = require('path');

function loginAuth (req, res, next) {
    const usersJSON = fs.readFileSync(path.join(__dirname, "../data/usersData.json"));
    const users = JSON.parse(usersJSON);
    for (let user of users) {
        if (req.body.mail == user.email) {
            if (bcrypt.compare(req.body.password, user.password)) {
                res.render('login');
            } else {
                res.send("Credenciales inválidas")                 
            }

        } else {
            res.render('error');
        }
    }
    
    next();
}

module.exports = loginAuth;

