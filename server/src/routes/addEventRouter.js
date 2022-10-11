const express = require("express");
const router = express.Router();

const {
    addEventInfo,
    deleteEvent,
} = require("../controllers/addEventControllers");


router
  .route("/")
  .post(addEventInfo) 
  .delete(deleteEvent)   

module.exports = router;