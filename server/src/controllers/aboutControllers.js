const { About } = require('../../db/models');

exports.getAboutData = async (req, res) => {
  const abouts = await About.findAll();
  res.json(...abouts);
}
