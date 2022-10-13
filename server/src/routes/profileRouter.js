const express = require("express");
const router = express.Router();

const {
    getUserInfo,
    putUserInfo,
} = require("../controllers/profileControllers");


router
  .route("/")
  .get(getUserInfo)
  .put(putUserInfo)
  
module.exports = router;