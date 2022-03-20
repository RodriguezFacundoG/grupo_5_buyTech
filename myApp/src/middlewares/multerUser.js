const multer = require ('multer');

const storage= multer.diskStorage({
    destination: (req,file,cb)=>{
        cb(null, path.resolve('../data/usersAvatars'))
    },

    fileName: (req,file,cb)=>{
        cb(null, file.fieldname + '---'+ Date.now())
    }
}
)

const upload = multer({storage:storage});

module.exports = upload
