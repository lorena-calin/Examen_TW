const { Model, DataTypes } = require("sequelize");
const sequelize = require("../database");

class CrewMember extends Model {}

CrewMember.init(
  {
    nume: {
      type: DataTypes.STRING,
      length: { minimum: 5 },
    },
    rol: {
      type: DataTypes.STRING,
    },
  },
  {
    sequelize,
    modelName: "CrewMember",
    timestamps: false,
  }
);

module.exports = CrewMember;
