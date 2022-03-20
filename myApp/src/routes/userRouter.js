const express= require ('express');
const router = express.Router();
const path = require ('path');

// Multer
const multer = require ('multer');

const storage= multer.diskStorage({
    destination: (req,file,cb)=>{
          //cb(null, path.join('public/images/userAvatars'))  
          cb(null, path.join('src/data/usersAvatars'))  
        //cb(null, path.resolve('public/images/userAvatars'))
        //NOTA: el resolve funciona, pero es muy largo el path que escribe
    },
    fileName: (req,file,cb)=>
    {cb(null,file.originalname.replace(/ /g, "aaa") + Date.now() + path.extname(file.originalname));
    }
}
)
const upload = multer({storage:storage});
// ! Multer

//const uploadUser = require('../middlewares/multerUser')
const userController = require('../controllers/userController.js')

router.get('/login', userController.login);
router.post('/login', userController.login);

router.get('/register', userController.register);
router.post('/register', upload.single('user_photo'), userController.register1);

router.get('/product', userController.productCart);

module.exports= router;