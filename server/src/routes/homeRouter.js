const express = require("express");
const router = express.Router();

const {
    getGreeting,
} = require("../controllers/homeControllers");


router
  .route("/")
  .get(getGreeting)  
  
module.exports = router;