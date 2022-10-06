const express = require("express");
const router = express.Router();

const { getNews, putNews, editNews, deleteNews } = require("../controllers/newsControllers");

router.route("/").get(getNews).post(putNews).put(editNews).delete(deleteNews)


module.exports = router;
