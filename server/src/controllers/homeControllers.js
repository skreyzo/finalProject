const { Home } = require('../../db/models');

exports.getGreeting = async (req, res) => {
    const greeting = await Home.findAll({raw: true});
    res.json(...greeting);
};
