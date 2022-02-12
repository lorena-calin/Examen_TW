import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./components/Home";
import { MovieList } from "./components/MovieList";
import { AddMovie } from "./components/AddMovie";
import { EditMovie } from "./components/EditMovie";
import { CrewMemberList } from "./components/CrewMemberList";
import { AddCrewMember } from "./components/AddCrewMember";
import { EditCrewMember } from "./components/EditCrewMember";

function App() {
  // const navigate = useNavigate();
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Routes>
            <Route path="/" exact element={<Home />}></Route>
            <Route path="/movielist" exact element={<MovieList />}></Route>
            <Route path="/addmovie" exact element={<AddMovie />}></Route>
            <Route path="/editmovie" exact element={<EditMovie />}></Route>
            <Route
              path="/crewmemberlist"
              exact
              element={<CrewMemberList />}
            ></Route>
            <Route
              path="/addcrewmember"
              exact
              element={<AddCrewMember />}
            ></Route>
            <Route
              path="/editcrewmember"
              exact
              element={<EditCrewMember />}
            ></Route>
          </Routes>
        </Router>
      </header>
    </div>
  );
}

export default App;
