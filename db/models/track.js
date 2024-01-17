const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Track extends Model {
    static associate({ User, Comment, Rating }) {
      this.belongsTo(User, { foreignKey: 'user_id' });
      this.hasMany(Comment, { foreignKey: 'track_id' });
      this.hasMany(Rating, { foreignKey: 'track_id' });
    }
  }
  Track.init({
    city: DataTypes.STRING,
    title: DataTypes.STRING,
    start: DataTypes.STRING,
    finish: DataTypes.STRING,
    img: DataTypes.STRING,
    user_id: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Track',
  });
  return Track;
};
