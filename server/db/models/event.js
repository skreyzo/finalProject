'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Event extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsToMany(models.User, {through: models.Order});
      // define association here
    }
  }
  Event.init({
    title: DataTypes.STRING,
    description: DataTypes.TEXT,
    ticket: DataTypes.INTEGER,
    price: DataTypes.FLOAT,
    address: DataTypes.STRING,
    dataTime: DataTypes.STRING,
    coordinat: DataTypes.STRING,
    eventphotolink: DataTypes.STRING,    
  }, {
    sequelize,
    modelName: 'Event',
  });
  return Event;
};