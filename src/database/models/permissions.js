'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class permissions extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      permissions.belongsToMany(models.roles, {
        as: 'roles',
        through: 'permissions_roles',
        foreignKey:'permissionId',
        otherKey:'role_Id',
        timestamps: false,
      })
    }
  };
  permissions.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'permissions',
  });
  return permissions;
};