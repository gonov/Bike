const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Rating extends Model {
    static associate({ User, Track }) {
      this.belongsTo(User, { foreignKey: 'user_id' });
      this.belongsTo(Track, { foreignKey: 'track_id' });
    }
  }
  Rating.init({
    point: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER,
    track_id: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Rating',
  });
  return Rating;
};
