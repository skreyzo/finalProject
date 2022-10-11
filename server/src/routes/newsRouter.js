const express = require("express");

const router = express.Router();

const {
  getNews,
  putNews,
  editNews,
  deleteNews,
} = require("../controllers/newsControllers");

router.route("/").get(getNews).post(putNews).delete(deleteNews).put(editNews)
// .put(editNews).
// get("/:id", function (req, res)console.log(req.params)}),

module.exports = router;
