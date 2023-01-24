'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class roles extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      roles.belongsToMany(models.users, {
        as: 'users',
        through: 'roles_users',
        foreignKey:'roleId',
        otherKey:'userId',
        timestamps: false,
      }),
      roles.belongsToMany(models.permissions, {
        as: 'permissions',
        through: 'permissions_roles',
        foreignKey:'role_Id',
        otherKey:'permissionId',
        timestamps: false,
      })
    }
    }
  roles.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'roles',
  });
  return roles;
};