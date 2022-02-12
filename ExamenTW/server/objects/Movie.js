const { Model, DataTypes } = require("sequelize");
const sequelize = require("../database");
const CrewMember = require("./CrewMember");

class Movie extends Model {}

Movie.init(
  {
    titlu: {
      type: DataTypes.STRING,
      length: { minimum: 3 },
    },
    categorie: {
      type: DataTypes.STRING,
    },
    dataPublicarii: {
      type: DataTypes.DATEONLY,
    },
  },
  {
    sequelize,
    modelName: "Movie",
    timestamps: false,
  }
);

Movie.hasMany(CrewMember, { foreignKey: "movieId" });

module.exports = Movie;
