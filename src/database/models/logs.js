'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Logs extends Model {
    // getLogable(options) {
    //   if (!this.logType) return Promise.resolve(null);
    //   const mixinMethodName = `get${uppercaseFirst(this.logType)}`;
    //   return this[mixinMethodName](options);
    // }
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Logs.belongsTo(models.users, { foreignKey: 'userID', constraints: false, as:"users" });
      Logs.belongsTo(models.abmusers, { foreignKey: 'abmUserId', constraints: false, as:"abmusers" });
    }
  };
  Logs.init({
    userID: DataTypes.INTEGER,
    abmUserId: DataTypes.INTEGER,
    logType: DataTypes.STRING,
    description: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Logs',
    tableName: 'logs'
  });
  return Logs;
};