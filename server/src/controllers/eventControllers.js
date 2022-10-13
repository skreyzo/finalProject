const { Event, Order, User } = require("../../db/models");

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
  //console.log('req.body========>', req.body)
  const { ticketQT } = req.body;
  //console.log('ticketQT========>', ticketQT)
  const eventId = req.params.id;
  //console.log('eventId========>', eventId)
  const toEvent = await Event.findOne({
    where: { id: eventId },
    raw: true,
  });
  const totalPrice = ticketQT * toEvent.price;
  /*   console.log("totalprice", totalPrice);
  console.log("toEvent========>", toEvent); */
  const order = await Order.create({
    ticketQT,
    totalprice: totalPrice,
    UserId: 2,
    EventId: eventId,
  });

  const ticketLeft = toEvent.ticket - ticketQT;
  console.log("ticketLeft========>", ticketLeft);
  const sellTicket = await Event.update(
    { ticket: ticketLeft },
    { where: { id: eventId } }
  );

  const listEventUser = await Event.findAll({
    where: { id: 2 },
    include: [{ model: User, trough: Order }],
    raw: true,
  });
  console.log("listEventUser========>", listEventUser);
  res.json(listEventUser);
};
