import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Movie from "./Movie";
import MovieComponent from "./MovieComponent";
import CrewMember from "./CrewMember";
import CrewMemberComponent from "./CrewMemberComponent";

export const MovieList = () => {
  const navigate = useNavigate();
  global.selectedId = -1;
  const [movies, setMovies] = useState([]);
  const [crew, setCrew] = useState([]);

  useEffect(() => {
    Movie.getMovie();
    Movie.emitter.addListener("GET_MOVIE_SUCCESS", () => {
      setMovies(Movie.data);
    });
  }, []);

  const handleDelete = (id) => {
    console.log();
    Movie.deleteMovie(id);
    Movie.getMovie();
  };

  const handleAddMovie = () => {
    navigate("/addmovie");
  };

  const handleEditMovie = (id) => {
    global.selectedId = id;
    navigate("/editmovie");
  };

  const handleGetCrew = (id) => {
    CrewMember.getMovieCrew(id);
    CrewMember.emitter.addListener("GET_MOVIECREW_SUCCESS", () => {
      setCrew(CrewMember.data);
    });
  };

  return (
    <div className="movies">
      <h1>Movies</h1>
      <div className="home">
        <button
          className="button"
          onClick={() => {
            navigate("/");
          }}
        >
          Home
        </button>
        <button className="button" onClick={handleAddMovie}>
          Add Movie
        </button>
        <div className="listHolder">
          <MovieComponent
            movies={movies}
            handleDelete={handleDelete}
            handleEdit={handleEditMovie}
            handleGetCrew={handleGetCrew}
            all={false}
          />
          <CrewMemberComponent crewMembers={crew} all={true} />
        </div>
      </div>
    </div>
  );
};
