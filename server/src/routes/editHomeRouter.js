const express = require("express");
const router = express.Router();
const multer=require('multer');
const path = require('path');
const { Home } =require("../../db/models")

//!multer storage
const storage=multer.diskStorage({
  destination:(req,file,cb)=>{
      cb(null,"public/uploads/")
  },
  filename:(req,file,cb)=>{       
    cb(null, Date.now() + '-' + file.originalname)
  }
     
})

const upload = multer({dest: "public/uploads/"});

const {
  addGreetPhoto,
  putGreeting,
} = require("../controllers/editHomeControllers");


router
  .route("/")
  .post(upload.single('loading_greetingPhoto'), async (req, res) => {
    console.log("req.file-------", req.file)
    console.log("req.files-------", req.files)
    const addLink = await Home.update({bigfoto: `/uploads/${req.file.filename}`}, {where: {id: 1}});
    const getDBData = await Home.findByPk(1);
    res.json(getDBData);
    }) 
  .put(putGreeting);

module.exports = router;