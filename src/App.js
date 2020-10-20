import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home/index";
import About from "./Pages/About/index";
import Course from "./Pages/Courses/index";
import Event from "./Pages/Events/index";
import Contact from "./Pages/Contact/index";
import Detail from "./Pages/DetailCouse/index";
import SignUp from "./Pages/SignUp/index";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/signup" component={SignUp} />
          <Route path="/contact" component={Contact} />
          <Route path="/detail" component={Detail} />
          <Route path="/event" component={Event} />
          <Route path="/course" component={Course} />
          <Route path="/about" component={About} />
          <Route path="/" component={Home} />
        </Switch>
      </BrowserRouter>
    );
  }
}
export default App;
