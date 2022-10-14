const { User, Order, Event } = require("../../db/models");

exports.getUserInfo = async (req, res) => {
  const userInfo = await User.findOne({ where: { id: 2 }, raw: true });
  console.log("userInfo>>>>>>>>>>>", userInfo);
  res.json(userInfo);
};

exports.putUserInfo = async (req, res) => {
  console.log("req.body>>>>>>>>>>>", req.body);
  const { firstName, lastName } = req.body;
  try {
    const user = await User.update(
      { firstName, lastName },
      { where: { id: 2 } }
    );
    res.json(user);
  } catch (err) {
    res.status(500).json({ err: err.message });
  }
};

exports.buyTicket = async (req, res) => {
  console.log("req.body>>>>>>>>>>>", req.body);
  //const { firstName, lastName } = req.body;
  try {
    const listOrderUser = await Event.findAll({
      /* where: { UserId: 2 }, */
      include: [{ model: Order }],
      raw: true,
    });
  /*   const listEventUser = await Event.findAll({
      where: { UserId: 2 },
      include: [{ model: Event }],
      raw: true,
    }); */
    console.log("listOrderUser========>", listOrderUser);
    res.json(listOrderUser);
  } catch (err) {
    res.status(500).json({ err: err.message });
  }
};


