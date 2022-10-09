const express = require("express");
const router = express.Router();

const {
  addGreetPhoto,
  putGreeting,
} = require("../controllers/editHomeControllers");


router
  .route("/")
  .post(addGreetPhoto)  
  .put(putGreeting);

module.exports = router;