const express = require("express");
const router = express.Router();

const {
    getUserInfo,
    putUserInfo,
    buyTicket,
    userdata
} = require("../controllers/profileControllers");


router
/*   .route("/")
  .get(getUserInfo)
  .put(putUserInfo) */

  .route("/")
  .get(buyTicket)

router
  .route("/userdata")
  .get(userdata)

module.exports = router;