const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Comment extends Model {
    static associate({ User, Track }) {
      this.belongsTo(User, { foreignKey: 'user_id' });
      this.belongsTo(Track, { foreignKey: 'track_id' });
    }
  }
  Comment.init({
    text: DataTypes.STRING,
    user_id: DataTypes.INTEGER,
    track_id: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Comment',
  });
  return Comment;
};
