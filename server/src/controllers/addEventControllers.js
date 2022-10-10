const { Event } = require("../../db/models");
const multer = require("multer");
const path = require("path");

//!multer storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({
  storage: storage,
});

/* //!multer controllers
exports.addGreetPhoto = async (req,res)=>{
  try {
    upload.single('loading_greetingPhoto')(req, res, async function (err) {
    const addLink = await Home.update({bigfoto: `/uploads/${req.file.filename}`}, {where: {id: 1}});
    const getDBData = await Home.findByPk(1);
    res.json(getDBData);    
    })          
  } catch (error) {
    console.log(error);
  }
} */

exports.addEventInfo = async (req, res) => {
  try {
    upload.single("loading_eventPhoto")(req, res, async function (err) {
      const { title, description, ticket, price, address } = req.body;
      if (req.file.filename) {
        const addLink = await Event.create({
          title,
          description,
          ticket,
          price,
          address,
          eventphotolink: `/uploads/${req.file.filename}`,
        });
        res.json(addLink);
      } else {
        const event = await Event.create({
          title,
          description,
          ticket,
          price,
          address,
        });
        res.json(event);
      }
    });
  } catch (err) {
    res.status(500).json({ err: err.message });
  }
};
