const express = require("express");
const router = express.Router();

const {
  getAboutData,
} = require("../controllers/aboutControllers");


router
  .route("/")
  .get(getAboutData)  
  //.post(putGreeting);

module.exports = router;