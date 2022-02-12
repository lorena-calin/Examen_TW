const MovieComponent = ({
  movies,
  handleDelete,
  handleEdit,
  handleGetCrew,
  all,
}) => {
  return (
    <div className="list">
      {movies.map((movie) => (
        <div className="preview" key={movie.id}>
          <div className="textHolder">
            <h2>
              {movie.id}.{movie.titlu}
            </h2>
            <p>Categorie: {movie.categorie}</p>
            <p>Data publicarii: {movie.dataPublicarii}</p>
          </div>
          {!all && (
            <div className="buttonHolder">
              <button className="button" onClick={() => handleEdit(movie.id)}>
                Edit
              </button>
              <button
                className="button"
                onClick={() => handleGetCrew(movie.id)}
              >
                Show Crew
              </button>
              <button className="button" onClick={() => handleDelete(movie.id)}>
                Delete
              </button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default MovieComponent;
