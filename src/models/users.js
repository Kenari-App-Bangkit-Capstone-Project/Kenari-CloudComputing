'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.hasMany(models.MbtiUserHistories, {
        foreignKey: 'user_id',
        as: 'userHistory',
      });
      User.hasMany(models.Discussions, {
        foreignKey: 'user_id',
        as: 'useDiscussions',
      });
      User.hasMany(models.DiscussionComments, {
        foreignKey: 'user_id',
        as: 'userComments',
      });
    }
  }
  User.init({
    user_id: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    label: {
      type: DataTypes.STRING,
      defaultValue: 'user',
    },
    address: {
      type: DataTypes.STRING,
    },
    university: {
      type: DataTypes.STRING,
    },
    personality: {
      type: DataTypes.STRING,
    },
    profile_photo: {
      type: DataTypes.STRING,
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: sequelize.fn('now'),
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: sequelize.fn('now'),
    },
  }, {
    sequelize,
    tableName: "users",
    modelName: 'Users',
  });
  return User;
};