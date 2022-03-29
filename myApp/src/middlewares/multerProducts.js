const multer = require ('multer');
const path = require ('path');

const storage= multer.diskStorage({
    destination: (req,file,cb)=>{
        cb(null, '../../public/images/productos')
    },

    filename: (req,file,cb)=>{
        // cb(null, file.fieldname + '-'+ Date.now())
        let imageName = `img-${Date.now()}${path.extname(file.originalname)}`;
        cb(null, imageName);
    }
}
)

const upload = multer({storage});


module.exports = upload