import React from "react";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const navigate = useNavigate();

  const movielistNavigate = () => {
    navigate("/movielist");
  };

  const crewmemberslistNavigate = () => {
    navigate("/crewmemberlist");
  };

  return (
    <div className="home">
      <div className="buttons-div">
        <button className="button" onClick={movielistNavigate}>
          Movies
        </button>
      </div>
      <div className="div1">
        <button className="button" onClick={crewmemberslistNavigate}>
          Crew Members
        </button>
      </div>
    </div>
  );
};
