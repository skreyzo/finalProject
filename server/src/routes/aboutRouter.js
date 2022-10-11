const express = require("express");
const router = express.Router();

const {
  getAboutData,
  getOurTeamData,
} = require("../controllers/aboutControllers");


router
  .route("/")
  .get(getAboutData)

router
  .route("/team")
  .get(getOurTeamData)

module.exports = router;