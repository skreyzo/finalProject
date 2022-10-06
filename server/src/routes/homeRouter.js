const express = require("express");
const router = express.Router();

const {
  getGreeting,
  putGreeting,
} = require("../controllers/homeControllers");


router
  .route("/")
  .get(getGreeting)  
  .put(putGreeting);

module.exports = router;