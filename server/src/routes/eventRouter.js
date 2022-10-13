const express = require("express");
const router = express.Router();

const {
    getEvent,
    getTheEvent,
    regEvent,
} = require("../controllers/eventControllers");


router
  .route("/")
  .get(getEvent)

router
  .route("/:id")
  .get(getTheEvent)  
  .post(regEvent)
  
module.exports = router;