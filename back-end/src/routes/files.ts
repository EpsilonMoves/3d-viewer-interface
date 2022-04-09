import express from 'express'
import fs from 'fs';
import multer from 'multer';

const router = express.Router()

const storage = multer.diskStorage({
    destination: function (req, file, callback) {
        callback(null, './uploads');
    },
    filename: function (req, file, callback) {
        callback(null, file.originalname);
    }
});

const upload = multer({ storage: storage })

// upload a file
router.post('/files',upload.single('file'),async(req,res)=>{
    res.status(200).send('file saved');
})

// get list of all files
router.get('/files',async(req,res)=>{
    const files =  fs.readdirSync('./uploads', {withFileTypes: true})
    .filter(item => !item.isDirectory())
    .map(item => item.name)
    res.status(200).send(files)
})



export {router as filesRouter}