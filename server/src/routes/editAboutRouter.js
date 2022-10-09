const express = require("express");
const router = express.Router();

const {
  editAbout,
  addBigPhoto,
} = require("../controllers/editAboutControllers");


router
  .route("/")
  .put(editAbout)
  .post(addBigPhoto)

module.exports = router;

