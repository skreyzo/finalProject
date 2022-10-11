'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class OurTeamCard extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  OurTeamCard.init({
    firstname: DataTypes.STRING,
    lastname: DataTypes.STRING,
    position: DataTypes.STRING,
    personimage: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'OurTeamCard',
  });
  return OurTeamCard;
};