const { Event } = require('../../db/models');

exports.getEvent = async (req, res) => {
    const event = await Event.findAll();
    res.json(event);
};

exports.getTheEvent = async (req, res) => {
    //console.log('req.params========>', req.params)
    const eventId = req.params.id;
    //console.log('eventId========>', eventId)
    const theEvent = await Event.findAll({
        where: { id: eventId },
        raw: true,
    });
    res.json(theEvent);
};

exports.regEvent = async (req, res) => {
    console.log('req.body========>', req.body)
    const { ticketQT } = req.body
    console.log('ticketQT========>', ticketQT)
    const eventId = req.params.id;
    console.log('eventId========>', eventId)
    const toEvent = await Event.findAll({
        where: { id: eventId },
        raw: true,
    });
    console.log('toEvent========>', toEvent)

    //res.json(ticketQT);
};