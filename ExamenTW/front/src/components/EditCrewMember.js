import CrewMember from "./CrewMember";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export const EditCrewMember = () => {
  const navigate = useNavigate();

  const [crewMember, setCrewMember] = useState(0);

  useEffect(() => {
    CrewMember.getOneCrewMember(global.selectedCrewId);
    CrewMember.emitter.addListener("GET_ONECREWMEMBER_SUCCESS", () => {
      setCrewMember(CrewMember.data);
    });
  }, []);

  const handleUpdate = (e) => {
    e.preventDefault();

    const nume = e.target.nume.value;
    const rol = e.target.rol.value;

    const cm = {
      nume: nume,
      rol: rol,
    };

    if (nume && rol) {
      CrewMember.updateCrewMember(global.selectedCrewId, cm);
      navigate("/crewmemberlist");
    } else {
      alert("All the fields are mandatory");
    }
  };

  return (
    <div className="base-container">
      <h2>Add a new Crew Member</h2>
      <form className="form" onSubmit={handleUpdate}>
        <div className="content">
          <div className="formm">
            <div className="form-group">
              <label htmlFor="nume">Nume</label>
              <input
                type="text"
                name="nume"
                placeholder="Nume"
                defaultValue={crewMember.nume}
              ></input>
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
