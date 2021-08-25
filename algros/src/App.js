import logo from './logo.svg';
import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";

import MainNavigation from "./shared/components/Navigation/MainNavigation";
import Home from "./home/page/Home";
import Courses from "./courses/pages/Courses";
import Signup from "./authentication/pages/Signup";

function App() {
  return (
    <Router>
      <MainNavigation />
      <main>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/auth">
            <Signup />
          </Route>
          <Route path="/courses">
            <Courses />
          </Route>
          <Route path="/courses/course">Your course</Route>
          <Route path="/user">Your users page</Route>
          <Route path="/about">about</Route>
          <Route path="/intro">intro</Route>
          <Redirect to="/" />
        </Switch>
      </main>
    </Router>
  );
}

export default App;
