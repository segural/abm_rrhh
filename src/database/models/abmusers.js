'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class abmusers extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  abmusers.init({
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    position: DataTypes.STRING,
    location: DataTypes.STRING,
    phone: DataTypes.INTEGER,
    birthday: DataTypes.DATE,
    ipphone: DataTypes.INTEGER,
    department: DataTypes.STRING,
    organization: DataTypes.STRING,
    chief: DataTypes.STRING,
    username: DataTypes.STRING,
    external: DataTypes.BOOLEAN,
    maildomain: DataTypes.STRING,
    userduedate: DataTypes.DATE,
    mail: DataTypes.STRING,
    status: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'abmusers',
  });
  return abmusers;
};