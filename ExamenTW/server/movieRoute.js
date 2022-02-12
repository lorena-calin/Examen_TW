const express = require("express");
const router = express.Router();
const Movie = require("./objects/Movie");

router.post("/", async (req, res) => {
  await Movie.create(req.body);
  res.send("movie is inserted");
});

router.get("/", async (req, res) => {
  const movies = await Movie.findAll();
  res.send(movies);
});

router.get("/:id", async (req, res) => {
  const reqId = req.params.id;
  const movie = await Movie.findOne({ where: { id: reqId } });

  if (!movie) {
    res.status(404).send("The movie does not exist");
    return;
  }

  res.send(movie);
});

router.put("/:id", async (req, res) => {
  const reqId = req.params.id;
  const movie = await Movie.findOne({ where: { id: reqId } });

  if (!movie) {
    res.status(404).send("The movie does not exist");
    return;
  }

  movie.titlu = req.body.titlu;
  movie.categorie = req.body.categorie;
  movie.dataPublicarii = req.body.dataPublicarii;

  await movie.save();
  res.send("updated");
});

router.delete("/:id", async (req, res) => {
  const reqId = req.params.id;
  await Movie.destroy({ where: { id: reqId } });
  res.send("removed");
});

module.exports = router;
