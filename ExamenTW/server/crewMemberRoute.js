const express = require("express");
const router = express.Router();
const CrewMember = require("./objects/CrewMember");

router.post("/", async (req, res) => {
  await CrewMember.create(req.body);
  res.send("Member is inserted");
});

router.get("/", async (req, res) => {
  const members = await CrewMember.findAll();
  res.send(members);
});

router.get("/:id", async (req, res) => {
  const reqId = req.params.id;
  const member = await CrewMember.findOne({ where: { id: reqId } });

  if (!member) {
    res.status(404).send("The member does not exist");
    return;
  }

  res.send(member);
});

router.get("/movie/:id", async (req, res) => {
  const reqId = req.params.id;
  const member = await CrewMember.findAll({ where: { movieId: reqId } });

  if (!member) {
    res.status(404).send("The member does not exist");
    return;
  }

  res.send(member);
});

router.put("/:id", async (req, res) => {
  const reqId = req.params.id;
  const member = await CrewMember.findOne({ where: { id: reqId } });

  if (!member) {
    res.status(404).send("The member does not exist");
    return;
  }

  member.nume = req.body.nume;
  member.rol = req.body.rol;

  await member.save();
  res.send("updated");
});

router.delete("/:id", async (req, res) => {
  const reqId = req.params.id;
  await CrewMember.destroy({ where: { id: reqId } });
  res.send("removed");
});

module.exports = router;
