const express = require("express");
const router = express.Router();

const {
    getEvent,
} = require("../controllers/eventControllers");


router
  .route("/")
  .get(getEvent,)  
  
module.exports = router;