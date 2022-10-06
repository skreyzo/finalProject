const { sequelize } = require('./models');
module.exports = async () => {
  try {
    await sequelize.authenticate();
    console.log('The database is successfully connected.');
  } catch (error) {
    console.error('The db was not started.', error.message);
  }
};
