const multer = require ('multer');
const path = require ('path');

const storage= multer.diskStorage({
    destination: (req,file,cb)=>{
        cb(null, '../../public/images/productos')
    },

    fileName: (req,file,cb)=>{
        cb(null, file.fieldname + '-'+ Date.now())
    }
}
)

const upload = multer({storage});


module.exports = upload