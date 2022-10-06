const { Home } = require('../../db/models');

exports.getGreeting = async (req, res) => {
  const greeting = await Home.findAll();
  res.json({greeting})
}

exports.putGreeting = async (req, res) => {
  console.log(req.body)  
  try {
  //const findGreeting = await Home.findOne({ where: { id: 1 } });
  const greeting = await Todolist.create(req.body);
  res.json({greeting});

  } catch (err) {
    res.status(500).json({err: err.message})
  }
}