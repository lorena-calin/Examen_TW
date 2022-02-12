import { EventEmitter } from "fbemitter";

const SERVER = "http://localhost:8080/movie";

class Movie {
  constructor() {
    this.data = [];
    this.emitter = new EventEmitter();
  }

  async getMovie() {
    const response = await fetch(SERVER);

    this.data = await response.json();

    this.emitter.emit("GET_MOVIE_SUCCESS");
  }

  async getOneMovie(id) {
    const response = await fetch(SERVER + "/" + id);

    this.data = await response.json();

    this.emitter.emit("GET_ONEMOVIE_SUCCESS");
  }

  async addMovie(movie) {
    const response = await fetch(SERVER, {
      method: "POST",
      headers: {
        "content-type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify(movie),
    });
    this.getMovie();
  }

  async updateMovie(id, movie) {
    const response = await fetch(SERVER + "/" + id, {
      method: "PUT",
      headers: {
        "content-type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify(movie),
    });
    this.getMovie();
  }

  async deleteMovie(id) {
    const response = await fetch(SERVER + "/" + id, {
      method: "DELETE",
    });
    this.getMovie();
  }
}

const Mov = new Movie();

export default Mov;
