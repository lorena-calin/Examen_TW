const express = require("express");
const sequelize = require("./database");
const movie = require("./movieRoute");
const crewMember = require("./crewMemberRoute");
const cors = require("cors");

sequelize.sync({ force: true }).then(() => console.log("db open"));

const app = express();

app.use(express.json());
app.use(cors());
app.use("/movie", movie);
app.use("/crewMember", crewMember);

app.listen(8080, () => {
  console.log("app is running");
});
