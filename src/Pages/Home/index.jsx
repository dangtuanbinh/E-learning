import React, { Component } from "react";
import wrapper from "../../HOCs/functionWrapper";
import styles from "./style";
import { withStyles } from "@material-ui/core/styles";
import Slider from "../../Components/Slider/index";
import Banner from "../../Components/Banner/index";
import Category from "../../Components/Category/index";
import AdverBanner from "../../Components/AdverBanner/index";
import Course from "../../Components/Course";

class Home extends Component {
  render() {
    return (
      <div>
        <Slider />
        <Banner />
        <Category />
        <AdverBanner />
        <Course />
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(wrapper(Home));
