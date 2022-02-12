import CrewMember from "./CrewMember";
import Movie from "./Movie";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export const AddCrewMember = () => {
  const navigate = useNavigate();

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    Movie.getMovie();
    Movie.emitter.addListener("GET_MOVIE_SUCCESS", () => {
      setMovies(Movie.data);
    });
  }, []);

  const handleAdd = (e) => {
    e.preventDefault();

    const nume = e.target.nume.value;
    const movieId = e.target.movieId.value;
    const rol = e.target.rol.value;

    const cm = {
      nume: nume,
      movieId: movieId,
      rol: rol,
    };

    if (nume && movieId && rol) {
      CrewMember.addCrewMember(cm);
      navigate("/crewmemberlist");
    } else {
      alert("All the fields are mandatory");
    }
  };

  return (
    <div className="base-container">
      <h2>Add a new Crew Member</h2>
      <form className="form" onSubmit={handleAdd}>
        <div className="content">
          <div className="formm">
            <div className="form-group">
              <label htmlFor="nume">Nume</label>
              <input type="text" name="nume" placeholder="Nume"></input>
            </div>
            <div className="form-group">
              <label htmlFor="movieId">Film</label>
              <select name="movieId" placeholder="Categorie">
                {movies.map((movie) => (
                  <option value={movie.id} key={movie.id}>
                    {movie.titlu}
                  </option>
                ))}
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="rol">Rol</label>
              <select name="rol" placeholder="Rol">
                <option value="Regizor">Regizor</option>
                <option value="Operator Camera">Operator Camera</option>
                <option value="Tehnician">Tehnician</option>
                <option value="Actor">Actor</option>
                <option value="Writer">Writer</option>
              </select>
            </div>
          </div>
        </div>
        <button type="submit" className="button">
          Add
        </button>
        <button
          className="button"
          onClick={() => {
            navigate("/crewmemberlist");
          }}
        >
          Cancel
        </button>
      </form>
    </div>
  );
};
