import "./App.scss";
import Theme from "./themeApp/Theme";
import Timer from "./timerApp/Timer";
import TodoAppHome from "./todoApp/TodoAppHome";
import { BrowserRouter as Router, Route } from "react-router-dom";
import SideNav from "./common/SideNav";
import Home from "./common/Home.js";

function App() {
  return (
    <Router>
      <div className="app-container">
        <SideNav />

        <Route exact path="/">
          <Home />
        </Route>

        <Route path="/theme">
          {/* Theme App */}
          <Theme />
        </Route>

        <Route path="/timer">
          {/* Timer App */}
          <Timer />
        </Route>

        <Route path="/todo">
          {/* ToDo List App */}
          <TodoAppHome />
        </Route>
      </div>
    </Router>
  );
}

export default App;
