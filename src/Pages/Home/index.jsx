import React, { Component } from "react";
import styles from "./style";
import { withStyles } from "@material-ui/core/styles";
import Header from "../../Components/Header/index"
import Slider from "../../Components/Slider/index";
import Banner from "../../Components/Banner/index";
import Category from "../../Components/Category/index";
import AdverBanner from "../../Components/AdverBanner/index";
import Course from "../../Components/Course";
import BottomBanner from "../../Components/BottomBanner";
import OurTeacher from "../../Components/OurTeachers";
import Event from "../../Components/UpcomingEvent";
import Footer from "../../Components/Footer";

class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        <Slider />
        <Banner />
        <Category />
        <AdverBanner />
        <Course />
        <BottomBanner />
        <OurTeacher />
        <Event />
        <Footer />
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(Home);
