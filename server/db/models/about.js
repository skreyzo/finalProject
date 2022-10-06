'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class About extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  About.init({
    toptext: DataTypes.TEXT,
    bottomtext: DataTypes.TEXT,
    address: DataTypes.STRING,
    phone: DataTypes.STRING,
    email: DataTypes.STRING,
    mainphotolink: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'About',
  });
  return About;
};