const { About } = require('../../db/models');
const { OurTeamCard } = require('../../db/models');

const multer=require('multer');
const path = require('path');

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
  try {
    if(nameField === 'topText'){
      const changeTopText = await About.update(
        { toptext: editorValue },
        { where: { id: 1 } }
      )
    const getDBData = await About.findByPk(1);
    res.json(getDBData);
    }    
  } catch (error) {
    console.log(error);
  }
}

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

exports.addNewPerson = async (req,res)=>{  
  try {    
    upload.single('loading_personPhoto')(req, res, async function (err) {
      const dataObj = JSON.parse(req.body.personData);
      const addNewPerson = await OurTeamCard.create({ firstname:dataObj.firstname, 
                                                      lastname: dataObj.lastname, 
                                                      position: dataObj.position,
                                                      personimage: `/uploads/${req.file.filename}`
      });
    res.json(addNewPerson);    
  })          
  } catch (error) {
    console.log(error);
  }
}

exports.delPerson = async (req,res)=>{  
  try {
      const delPerson = await OurTeamCard.destroy({where: {id: req.body.id }});      
      res.sendStatus(200);
  } catch (error) {
    console.log(error);
  }
}