'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class domains extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      domains.hasMany(models.Logs, {
        as:'logs',
        foreignKey: 'logId',
        constraints: false,
        scope: {
          logType: 'system'
          }
      })
    }
  };
  domains.init({
    domainName: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'domains',
  });
  return domains;
};