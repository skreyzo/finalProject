'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.User, { foreignKey: 'UserId' });
      this.belongsTo(models.Event, { foreignKey: 'EventId' });
      // define association here
    }
  }
  Order.init({
    ticketQT: DataTypes.INTEGER,
    totalprice: DataTypes.FLOAT,
    UserId: DataTypes.INTEGER,
    EventId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Order',
  });
  return Order;
};