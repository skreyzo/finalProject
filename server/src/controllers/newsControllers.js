const { News } = require("../../db/models");

exports.getNews = async (req, res) => {
  const getNewsList = await News.findAll();
  res.json({ getNewsList });
};

exports.putNews = async (req, res) => {
  console.log(req.body);
  const { title, body } = req.body;
  try {
    const createNewsList = await News.create({ title, body });
    res.json({ createNewsList });
  } catch (err) {
    res.status(500).json({ err: err.message });
  }
};

exports.editNews = async (req, res) => {

};
exports.deleteNews = async (req, res) => {

};


