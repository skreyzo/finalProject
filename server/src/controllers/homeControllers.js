const { Home } = require("../../db/models");

exports.getGreeting = async (req, res) => {
  const greeting = await Home.findAll();
  res.json({ greeting });
};

exports.putGreeting = async (req, res) => {
  try {
    const greeting = await Home.update(
      { greeting: req.body.value },
      { where: { id: 1 } }
    );
    res.json(greeting);
  } catch (err) {
    res.status(500).json({ err: err.message });
  }
};
