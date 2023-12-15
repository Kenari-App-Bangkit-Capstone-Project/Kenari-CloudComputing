'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('discussions', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      user_id: {
        allowNull: false,
        type: Sequelize.STRING,
        references: {
          model: 'users',
          key: 'user_id',
        }
      },
      content: {
        allowNull: false,
        type: Sequelize.TEXT
      },
      status: {
        allowNull: false,
        defaultValue: "active",
        type: Sequelize.STRING
      },
      isAnonymous: {
        allowNull: false,
        defaultValue: "false",
        type: Sequelize.BOOLEAN
      },
      createdAt: {
        allowNull: false,
        defaultValue: Sequelize.fn('now'),
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        defaultValue: Sequelize.fn('now'),
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('discussions');
  }
};