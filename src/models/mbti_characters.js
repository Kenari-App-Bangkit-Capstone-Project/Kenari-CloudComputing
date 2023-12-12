"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class mbti_characters extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  mbti_characters.init(
    {
      code: {
        primaryKey: true,
        type: DataTypes.STRING,
      },
      character: DataTypes.TEXT,
    },
    {
      sequelize,
      timestamps: false, 
      tableName: "mbti_characters",
      modelName: "MbtiCharacters",
    }
  );
  return mbti_characters;
};
