import { useEffect, useState } from "react";
import Movie from "./Movie";
import { useNavigate } from "react-router-dom";

export const EditMovie = () => {
  const navigate = useNavigate();

  const [movie, setMovie] = useState(0);

  useEffect(() => {
    Movie.getOneMovie(global.selectedId);
    Movie.emitter.addListener("GET_ONEMOVIE_SUCCESS", () => {
      setMovie(Movie.data);
    });
  }, []);

  const handleSave = (e) => {
    e.preventDefault();

    const titlu = e.target.titlu.value;
    const categorie = e.target.categorie.value;
    const data = e.target.data.value;

    const m = {
      titlu: titlu,
      categorie: categorie,
      dataPublicarii: data,
    };

    if (titlu && categorie && data) {
      Movie.updateMovie(global.selectedId, m);
      navigate("/movielist");
    } else {
      alert("All the fields are mandatory");
    }
  };

  return (
    <div className="base-container">
      <h2>Add a new Movie</h2>
      <form className="form" onSubmit={handleSave}>
        <div className="content">
          <div className="formm">
            <div className="form-group">
              <label htmlFor="titlu">Titlu</label>
              <input
                type="text"
                name="titlu"
                placeholder="Titlu"
                defaultValue={movie.titlu}
              ></input>
            </div>
            <div className="form-group">
              <label htmlFor="categorie">Categorie</label>
              <select
                name="categorie"
                placeholder="Categorie"
                defaultValue={movie.categorie}
              >
                <option value="Actiune">Actiune</option>
                <option value="Drama">Drama</option>
                <option value="Comedie">Comedie</option>
                <option value="Horror">Horror</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="data">Data publicarii</label>
              <input
                type="date"
                name="data"
                placeholder="Data publicarii"
                defaultValue={movie.dataPublicarii}
              ></input>
            </div>
          </div>
        </div>
        <button type="submit" className="button">
          Edit Movie
        </button>
        <button
          className="button"
          onClick={() => {
            navigate("/movielist");
          }}
        >
          Cancel
        </button>
      </form>
    </div>
  );
};
