const { sequelize } = require('./models');

module.exports = async () => {
  try {
    await sequelize.authenticate();
    console.log('Sequelize is connected');
  } catch (error) {
    throw new Error('Sequelize is not connected', error);
  }
};
