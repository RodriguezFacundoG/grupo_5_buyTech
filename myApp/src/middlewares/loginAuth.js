const fs = require('fs')
const path = require('path');

function loginAuth (req, res, next) {
    const usersJSON = fs.readFileSync(path.join(__dirname, "../data/usersData.json"));
    const users = JSON.parse(usersJSON);
    for (let user of users) {
        if(req.body.)
    }
    next();
}

module.exports = loginAuth;

