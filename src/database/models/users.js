'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      users.belongsToMany(models.roles, {
        as: 'roles',
        through: 'roles_users',
        foreignKey:'userId',
        otherKey:'roleId',
        timestamps: false,
      })
      users.hasMany(models.Logs, {
        as:'logs',
       foreignKey: 'logId',
       constraints: false,
       scope: {
         logType: 'Users'
       }
     })
     users.hasMany(models.Logs, {
      as:'userLogs',
      foreignKey: 'userID',
      timestamps: false,
    })
    }
  }
  users.init({
    fullName: DataTypes.STRING,
    username: DataTypes.STRING,
    mail: DataTypes.STRING,
    password: DataTypes.STRING,
    active: DataTypes.INTEGER,
    resetFlag: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'users',
  });
  return users;
};