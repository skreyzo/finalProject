const { Home } = require("../../db/models");
const multer=require('multer');
const path = require('path');

//!multer storage
const storage=multer.diskStorage({
  destination:(req,file,cb)=>{
      cb(null,"public/uploads/")
  },
  filename:(req,file,cb)=>{       
    cb(null, Date.now() + '-' + file.originalname)
  }
     
})

const upload=multer({
  storage:storage
});

//!multer controllers
// exports.addGreetPhoto = async (req,res)=>{
//   try {
//     upload.single('loading_greetingPhoto')(req, res, async function (err) {
//       console.log('~ req.file========', req.file)
//       console.log('~ req.body========', req.body)
//     const addLink = await Home.update({bigfoto: `/uploads/${req.file.filename}`}, {where: {id: 1}});
//     const getDBData = await Home.findByPk(1);
//     res.json(getDBData);    
//     })          
//   } catch (error) {
//     console.log(error);
//   }
// }
exports.addGreetPhoto = async (req,res) => {
  console.log('~ req.body', req.body)
  return {
}
  // try {
  //   upload.single('loading_greetingPhoto')(req, res, async function (err) {
  //   const addLink = await Home.update({bigfoto: `/uploads/${req.file.filename}`}, {where: {id: 1}});
  //   const getDBData = await Home.findByPk(1);
  //   res.json(getDBData);
  //   })
  // } catch (error) {
  //   console.log(error);
  // }
}

exports.putGreeting = async (req, res) => {
  try {
    const greeting = await Home.update(
      { greeting: req.body.value },
      { where: { id: 1 } }
    );
    res.json(greeting);
  } catch (err) {
    res.status(500).json({ err: err.message });
  }
};
