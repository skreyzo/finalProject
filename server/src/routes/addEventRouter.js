const express = require("express");
const router = express.Router();

const {
    addEventInfo,
  putGreeting,
} = require("../controllers/addEventControllers");


router
  .route("/")
  .post(addEventInfo)  
  //.put(putGreeting);

module.exports = router;