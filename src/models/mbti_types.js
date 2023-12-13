"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class mbti_types extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      mbti_types.hasMany(models.MbtiUserHistories, {
        foreignKey: 'type_result',
        as: 'userHistory',
      });
    }
  }
  mbti_types.init(
    {
      code: {
        primaryKey: true,
        type: DataTypes.STRING,
      },
      type: DataTypes.STRING,
      information: DataTypes.TEXT,
    },
    {
      sequelize,
      timestamps: false,
      tableName: "mbti_types",
      modelName: "MbtiTypes",
    }
  );
  return mbti_types;
};
