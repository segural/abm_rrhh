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
      abmusers.hasMany(models.Logs, {
        as:'abmusers',
        foreignKey: 'abmUserId',
        timestamps: false,
        scope: {
          logType: 'Users'
        }
    })
    }
  }
  abmusers.init({
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    document: DataTypes.STRING,
    file: DataTypes.STRING,
    position: DataTypes.STRING,
    location: DataTypes.STRING,
    phone: { type: DataTypes.INTEGER, allowNull: true},
    birthday: DataTypes.DATE,
    ipphone: { type: DataTypes.INTEGER, allowNull: true},
    department: DataTypes.STRING,
    organization: DataTypes.STRING,
    chief: DataTypes.STRING,
    username: { type: DataTypes.INTEGER, allowNull: true},
    external: DataTypes.BOOLEAN,
    maildomain: { type: DataTypes.STRING, allowNull: true},
    userduedate: { type: DataTypes.DATE, allowNull: true},
    mail: { type: DataTypes.INTEGER, allowNull: true},
    status: { type: DataTypes.STRING, allowNull: true}
  }, {
    sequelize,
    modelName: 'abmusers',
  });
  return abmusers;
};