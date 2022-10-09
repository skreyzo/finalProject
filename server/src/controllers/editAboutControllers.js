const { About } = require('../../db/models');
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


exports.editAbout = async (req, res) => {
  const { nameField, editorValue } = req.body;
  ///console.log('req.body>>>>>', nameField, editField);
  try {
    if(nameField === 'topText'){
      const changeTopText = await About.update(
        { toptext: editorValue },
        { where: { id: 1 } }
      )
    res.json(changeTopText);
    }    
  } catch (error) {
    console.log(error);
  }
}

//!multer controllers
exports.addBigPhoto = async (req,res)=>{
  try {
    upload.single('loading_teamPhoto')(req, res, async function (err) {
    const addLink = await About.update({mainphotolink: `/uploads/${req.file.filename}`}, {where: {id: 1}});
    const getDBData = await About.findByPk(1);
    res.json(getDBData);    
    })          
  } catch (error) {
    console.log(error);
  }
}