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

//!multer storage
exports.addEventInfo = async (req, res) => {
  try {
    upload.single("loading_eventPhoto")(req, res, async function (err) {

      const { title, description, ticket, price, address, dataTime } = req.body;
      let month = dataTime.slice(4,7)
      month = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'].indexOf(month)+1;
      const formatDataTime =  `${dataTime.slice(16, 21)} ${dataTime.slice(8, 10)}-${month}-${dataTime.slice(11, 15)}`;
      
      if (req.file) {
        const addLink = await Event.create({
          title,
          description,
          ticket,
          price,
          address,
          dataTime: formatDataTime,
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
          dataTime: formatDataTime
        });
        res.json(event);
      }
    });
  } catch (err) {
    res.status(500).json({ err: err.message });
  }
};

exports.deleteEvent = async (req, res) => {  
  const { id } = req.body;
  console.log('id', req.body)
  try {
    const createEventList = await Event.destroy({
      where: {
        id,
      },
    });    
    res.json({ createEventList });
  } catch (err) {
    res.status(500).json({ err: err.message });
  }
};
