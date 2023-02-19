'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class chiefs extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      chiefs.hasMany(models.Logs, {
        as:'logs',
        foreignKey: 'logId',
        constraints: false,
        scope: {
          logType: 'system'
          }
      })
    }
  };
  chiefs.init({
    userName: DataTypes.STRING,
    fullName: DataTypes.STRING,
    email: DataTypes.STRING,
    department: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'chiefs',
  });
  return chiefs;
};