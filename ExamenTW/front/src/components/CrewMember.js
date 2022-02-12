import { EventEmitter } from "fbemitter";

const SERVER = "http://localhost:8080/crewMember";

class CrewMember {
  constructor() {
    this.data = [];
    this.emitter = new EventEmitter();
  }

  async getCrewMember() {
    const response = await fetch(SERVER);

    this.data = await response.json();

    this.emitter.emit("GET_CREWMEMBER_SUCCESS");
  }

  async getOneCrewMember(id) {
    const response = await fetch(SERVER + "/" + id);

    this.data = await response.json();

    this.emitter.emit("GET_ONECREWMEMBER_SUCCESS");
  }

  async getMovieCrew(id) {
    const response = await fetch(SERVER + "/movie/" + id);

    this.data = await response.json();

    this.emitter.emit("GET_MOVIECREW_SUCCESS");
  }

  async addCrewMember(crewMember) {
    const response = await fetch(SERVER, {
      method: "POST",
      headers: {
        "content-type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify(crewMember),
    });
    this.getCrewMember();
  }

  async updateCrewMember(id, crewMember) {
    const response = await fetch(SERVER + "/" + id, {
      method: "PUT",
      headers: {
        "content-type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify(crewMember),
    });
    this.getCrewMember();
  }

  async deleteCrewMember(id) {
    const response = await fetch(SERVER + "/" + id, {
      method: "DELETE",
    });
    this.getCrewMember();
  }
}

const Member = new CrewMember();

export default Member;
