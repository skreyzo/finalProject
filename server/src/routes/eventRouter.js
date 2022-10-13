const express = require("express");
const router = express.Router();

const {
    getEvent,
    getTheEvent,
} = require("../controllers/eventControllers");


router
  .route("/")
  .get(getEvent)

router
  .route("/:id")
  .get(getTheEvent)  
  
module.exports = router;