import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CrewMember from "./CrewMember";
import CrewMemberComponent from "./CrewMemberComponent";

export const CrewMemberList = () => {
  const navigate = useNavigate();
  global.selectedCrewId = -1;
  const [crew, setCrew] = useState([]);

  useEffect(() => {
    CrewMember.getCrewMember();
    CrewMember.emitter.addListener("GET_CREWMEMBER_SUCCESS", () => {
      setCrew(CrewMember.data);
    });
  }, []);

  const handleDelete = (id) => {
    console.log();
    CrewMember.deleteCrewMember(id);
    CrewMember.getCrewMember();
  };

  const handleAddCrewMember = () => {
    navigate("/addcrewmember");
  };

  const handleEditCrewMember = (id) => {
    global.selectedCrewId = id;
    navigate("/editcrewmember");
  };

  return (
    <div className="crew">
      <h1>Crew Members</h1>
      <div className="home">
        <button
          className="button"
          onClick={() => {
            navigate("/");
          }}
        >
          Home
        </button>
        <button className="button" onClick={handleAddCrewMember}>
          Add CrewMember
        </button>
        <CrewMemberComponent
          crewMembers={crew}
          handleDelete={handleDelete}
          handleEdit={handleEditCrewMember}
          all={false}
        />
      </div>
    </div>
  );
};
