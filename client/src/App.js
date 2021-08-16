import React from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import "./App.scss";
import Header from "./components/Header";
import Signup from "./components/Signup";

function App(props) {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/signup" component={Signup} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
