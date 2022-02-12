const CrewMemberComponent = ({
  crewMembers,
  handleDelete,
  handleEdit,
  all,
}) => {
  return (
    <div className="list">
      {crewMembers.map((crewMember) => (
        <div className="preview" key={crewMember.id}>
          <div className="textHolder">
            <h2>
              {crewMember.id}. {crewMember.nume}
            </h2>
            <p>Film: {crewMember.movieId}</p>
            <p>Rol: {crewMember.rol}</p>
          </div>
          {!all && (
            <div className="buttonHolder">
              <button
                className="button"
                onClick={() => handleEdit(crewMember.id)}
              >
                Edit
              </button>
              <button
                className="button"
                onClick={() => handleDelete(crewMember.id)}
              >
                Delete
              </button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default CrewMemberComponent;
