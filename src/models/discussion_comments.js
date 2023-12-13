'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class discussion_comments extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      discussion_comments.belongsTo(models.Users, {
        foreignKey: 'user_id',
        as: 'user'
      });
    }
  }
  discussion_comments.init({
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
    discussion_id: {
      allowNull: false,
      type: DataTypes.STRING
    },
    comment: {
      allowNull: false,
      type: DataTypes.TEXT
    },
    status: {
      defaultValue: 'active',
      type: DataTypes.STRING,
    },
    createdAt: {
      allowNull: false,
      defaultValue: sequelize.fn('now'),
      type: DataTypes.DATE
    },
    updatedAt: {
      allowNull: false,
      defaultValue: sequelize.fn('now'),
      type: DataTypes.DATE
    },
  }, {
    sequelize,
    tableName: 'discussion_comments',
    modelName: 'DiscussionComments',
  });
  return discussion_comments;
};