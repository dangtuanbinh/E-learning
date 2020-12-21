import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home/index";
import About from "./Pages/About/index";
import AllCourses from "./Pages/AllCourses/index";
import Event from "./Pages/Events/index";
import Contact from "./Pages/Contact/index";
import Detail from "./Pages/DetailCourse/index";
import SignUp from "./Pages/SignUp/index";
import Admin from "./Pages/Admin/index"
import SingleEvent from "./Pages/SingleEvent/index";
import UserAdmin from "./Pages/UserAdmin/index";
import CourseAdmin from "./Pages/CourseAdmin/index";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/admin" component={Admin} />
          <Route path="/signup" component={SignUp} />
          <Route path="/contact" component={Contact} />
          <Route path="/detail" component={Detail} />
          <Route path="/event" component={Event} />
          <Route path="/courses" component={AllCourses} />
          <Route path="/about" component={About} />
          <Route path="/single-event" component={SingleEvent} />
          <Route path="/user-admin" component={UserAdmin} />
          <Route path="/course-admin" component={CourseAdmin} />
          <Route path="/" component={Home} />
        </Switch>
      </BrowserRouter>
    );
  }
  
}
export default App;
