'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('mbti_user_histories', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      user_id: {
        type: Sequelize.STRING,
        references: {
          model: 'users',
          key: 'user_id',
        }
      },
      type_result: {
        type: Sequelize.STRING,
        references: {
          model: 'mbti_types',
          key: 'code',
        }
      },
      result_probability: {
        type: Sequelize.FLOAT
      },
      createdAt: {
        allowNull: false,
        defaultValue: Sequelize.fn('now'),
        type: Sequelize.DATE
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('mbti_user_histories');
  }
};