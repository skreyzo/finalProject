const express = require("express");
const router = express.Router();

const {
    getUserInfo,
    putUserInfo,
    buyTicket,
} = require("../controllers/profileControllers");


router
/*   .route("/")
  .get(getUserInfo)
  .put(putUserInfo) */

  .route("/")
  .get(buyTicket)
  
module.exports = router;