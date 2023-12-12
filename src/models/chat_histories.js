'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class chat_histories extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  chat_histories.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    user_id: {
      allowNull: false,
      type: DataTypes.STRING
    },
    user_input: {
      allowNull: false,
      type: DataTypes.STRING
    },
    response: {
      type: DataTypes.STRING
    },
    createdAt: {
      allowNull: false,
      defaultValue: sequelize.fn('now'),
      type: DataTypes.DATE
    },
  }, {
    sequelize,
    timestamps: false,
    tableName: 'chat_histories',
    modelName: 'ChatHistories',
  });
  return chat_histories;
};