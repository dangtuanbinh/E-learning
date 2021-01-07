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
import Admin from "./Pages/Admin/index";
// import DashBoard from "./Components/DashBoard/index";
// import Header from "./Components/Header/index ";

import {connect} from "react-redux"

class App extends Component {
  render() {
    return (
      <>
      <BrowserRouter>
            
        {/* {this.props.maLoaiNguoiDung === "GV" ? (
          <>
          <Header />
          <DashBoard />
          </> 
        ) : ( */}
          <Switch>
              <Route path="/admin" component={Admin} />
              <Route path="/signup" component={SignUp} />
              <Route path="/contact" component={Contact} />
              <Route path="/detail/:id" component={Detail} />
              <Route path="/event" component={Event} />
              <Route path="/courses" component={AllCourses} />
              <Route path="/about" component={About} />
              <Route path="/" component={Home} />
              </Switch>
          </BrowserRouter>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
logginedUser: state.auth.logginedUser
}) 
export default connect(mapStateToProps)(App);
