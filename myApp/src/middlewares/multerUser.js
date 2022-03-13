const multer = require ('multer');
const path = require ('path');
const pathToSave = path.resolve('data/usersAvatars')

const storage= multer.diskStorage({
    destination: (req,file,cb)=>{
        cb(null, path.resolve('data/usersAvatars'))
    },

    fileName: (req,file,cb)=>{
        cb(null, file.fieldname + '---'+ Date.now())
    }
}
)

const upload = multer({storage});


module.exports = upload
