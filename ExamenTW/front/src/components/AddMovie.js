import Movie from "./Movie";
import { useNavigate } from "react-router-dom";

export const AddMovie = () => {
  const navigate = useNavigate();
  const handleAdd = (e) => {
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
      Movie.addMovie(m);
      navigate("/movielist");
    } else {
      alert("All the fields are mandatory");
    }
  };

  return (
    <div className="base-container">
      <h2>Add a new Movie</h2>
      <form className="form" onSubmit={handleAdd}>
        <div className="content">
          <div className="formm">
            <div className="form-group">
              <label htmlFor="titlu">Titlu</label>
              <input type="text" name="titlu" placeholder="Titlu"></input>
            </div>
            <div className="form-group">
              <label htmlFor="categorie">Categorie</label>
              <select name="categorie" placeholder="Categorie">
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
              ></input>
            </div>
          </div>
        </div>
        <button type="submit" className="button">
          Add
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
