const { Event } = require('../../db/models');

exports.getEvent = async (req, res) => {
    const event = await Event.findAll();
    res.json(event);
};