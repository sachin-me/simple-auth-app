import React from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import "./App.scss";
import Header from "./components/Header";

function App(props) {
  return (
    <div className="App">
      <Router>
        <Header />
      </Router>
    </div>
  );
}

export default App;
