const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("database", "user", "password", {
  dialect: "sqlite",
  host: "./db.sqlite",
});

module.exports = sequelize;
