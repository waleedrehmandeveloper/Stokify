import express from 'express'
import path from 'path'
import multer from 'multer'
import { allProducts ,addProducts, singleProducts ,updateProducts, deleteProducts} from '../controller/products.controller.js'

const router = express.Router()

const storage = multer.diskStorage({
    destination: (req,file,cb)=>{
        cb(null,'../../uploads/')
    },
    filename:(req,file,cb)=>{
        const newName = Date.now() + path.extname(file.originalname)
        cb(null,newName)
    }
})

const fileFilter = (req,file,cb)=>{
  const fileFilter = (req, file, cb) => {
    if (
        file.mimetype === 'image/jpeg' ||
        file.mimetype === 'image/jpg' ||
        file.mimetype === 'image/png'
    ) {
        cb(null, true);
    } else {
        cb(new Error('Only JPG and PNG images are allowed'), false);
    }
};
}

const upload = multer({
    storage: storage,
    limits:{
        files:1,
        fileSize: 1024 * 1024 * 20
    },
    fileFilter: fileFilter
})

router.get('/allproducts',allProducts)
router.post('/addproducts',upload.single('files'),addProducts)
router.post('/products/:id',singleProducts)
router.patch('/updateproducts/:id',updateProducts)
router.delete('/deleteproducts/:id',deleteProducts)

router.use((req, res) => {
    res.status(404).json({
        success: false,
        message: "Route Not Found!"
    });                                                                 
});

export default router