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
      const { title, description, ticket, price, address } = req.body;      
      if (req.file) {
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
