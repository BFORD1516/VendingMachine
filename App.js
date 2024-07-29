import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import VendingMachine from "./components/VendingMachine";
import Snack1 from "./components/Snack1";
import Snack2 from "./components/Snack2";
import Snack3 from "./components/Snack3";
import "./styles/App.css";

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/snack1">Snack 1</Link>
            </li>
            <li>
              <Link to="/snack2">Snack 2</Link>
            </li>
            <li>
              <Link to="/snack3">Snack 3</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route exact path="/" component={VendingMachine} />
          <Route path="/snack1" component={Snack1} />
          <Route path="/snack2" component={Snack2} />
          <Route path="/snack3" component={Snack3} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
