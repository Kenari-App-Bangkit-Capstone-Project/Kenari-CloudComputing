'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class mbti_user_history extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  mbti_user_history.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    user_id: {
      type: DataTypes.STRING
    },
    type_result: {
      type: DataTypes.STRING
    },
    result_probability: {
      type: DataTypes.FLOAT
    },
    createdAt: {
      allowNull: false,
      defaultValue: sequelize.fn('now'),
      type: DataTypes.DATE
    },
  }, {
    sequelize,
    timestamps: false,
    tableName: 'mbti_user_histories',
    modelName: 'MbtiUserHistories',
  });
  return mbti_user_history;
};