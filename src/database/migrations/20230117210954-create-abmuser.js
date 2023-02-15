'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('abmusers', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      firstName: {
        type: Sequelize.STRING
      },
      lastName: {
        type: Sequelize.STRING
      },
      document: {
        type: Sequelize.STRING
      },
      position: {
        type: Sequelize.STRING
      },
      location: {
        type: Sequelize.STRING
      },
      phone: {
        type: Sequelize.INTEGER
      },
      birthday: {
        type: Sequelize.DATE
      },
      ipphone: {
        type: Sequelize.INTEGER
      },
      department: {
        type: Sequelize.STRING
      },
      organization: {
        type: Sequelize.STRING
      },
      chief: {
        type: Sequelize.STRING
      },
      username: {
        type: Sequelize.STRING
      },
      external: {
        type: Sequelize.BOOLEAN
      },
      maildomain: {
        type: Sequelize.STRING
      },
      userduedate: {
        type: Sequelize.DATE
      },
      mail: {
        type: Sequelize.STRING
      },
      status: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('abmusers');
  }
};