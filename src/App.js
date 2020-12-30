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
import CourseAdmin from "./Pages/CourseAdmin";
import UserAdmin from "./Pages/UserAdmin";
import UserList from "./Pages/UserList";
import CourseCategoriesItemDetail from "./Pages/CourseCategoriesItemDetail";
import CourseStudents from "./Pages/CourseStudents";
import SingleEvent from "./Pages/SingleEvent";
import Auth from "./HOCs";

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
          <Route path="/user-list" component={UserList} />
          <Auth path="/user-admin" Component={UserAdmin} />
          <Auth path="/course-admin" Component={CourseAdmin} />
          <Route path="/students-list/:listId" component={CourseStudents} />
          <Route
            path="/course-categories-detail/:courseCategoriesId"
            component={CourseCategoriesItemDetail}
          />
          <Route path="/" component={Home} />
        </Switch>
      </BrowserRouter>
    );
  }
  
}
export default App;
