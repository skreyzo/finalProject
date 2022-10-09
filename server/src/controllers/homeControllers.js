const { Home } = require('../../db/models');

exports.getGreeting = async (req, res) => {
    const greeting = await Home.findByPk(1);
    res.json(greeting);
};