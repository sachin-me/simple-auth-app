import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Loader from "react-loader-spinner";
import { useSelector } from "react-redux";
import "./App.scss";
import Header from "./components/Header";
import Signin from "./components/Signin";
import Signup from "./components/Signup";
import actions from "./store/actions";
import Dashboard from "./components/Dashboard";
import PublicRoute from "./components/PublicRoutes";

function App(props) {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actions.loggedInUser());
    setLoading(false);
  }, []);

  if (loading) {
    return (
      <div className="loader">
        <Loader type="Puff" color="#00BFFF" height={100} width={100} />
      </div>
    );
  }

  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <PublicRoute exact path="/signup" component={Signup} />
          <PublicRoute exact path="/signin" component={Signin} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
