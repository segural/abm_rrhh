'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class organizations extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      organizations.hasMany(models.Logs, {
        as:'logs',
        foreignKey: 'logId',
        constraints: false,
        scope: {
          logType: 'system'
          }
      })
    }
  };
  organizations.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'organizations',
  });
  return organizations;
};