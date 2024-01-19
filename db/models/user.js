const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate({ Track, Comment, Rating }) {
      this.hasMany(Track, { foreignKey: 'user_id' });
      this.hasMany(Comment, { foreignKey: 'user_id' });
      this.hasMany(Rating, { foreignKey: 'user_id' });
    }
  }
  User.init({
    name: DataTypes.STRING,
    img: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};
