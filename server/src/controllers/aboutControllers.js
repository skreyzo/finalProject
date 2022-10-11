const { About } = require('../../db/models');
const { OurTeamCard } = require('../../db/models');

exports.getAboutData = async (req, res) => {
  const abouts = await About.findAll({raw: true});
  console.log('abouts>>>>>>>>>>>', abouts);
  res.json(...abouts);
}

exports.getOurTeamData = async (req, res) => {
  const ourTeam = await OurTeamCard.findAll({raw: true});
  console.log('ourTeam>>>>>>>>>>>', ourTeam);
  res.json(ourTeam);
}
