import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.scss";
import Home from "./common/Home";
import SideNav from "./common/SideNav";
import Theme from "./themeApp/Theme";
import Timer from "./timerApp/Timer";
import TodoAppHome from "./todoApp/TodoAppHome";

function App() {
  return (
    <Router>
      <div className="app-container">
        <SideNav />

        <Route exact path="/">
          <Home />
        </Route>

        <Route path="/theme-app">
          {/* Theme App */}
          <Theme />
        </Route>

        <Route path="/timer-app">
          {/* Timer App */}
          <Timer />
        </Route>

        <Route path="/todo-app">
          {/* ToDo List App */}
          <TodoAppHome />
        </Route>
      </div>
    </Router>
  );
}

export default App;
