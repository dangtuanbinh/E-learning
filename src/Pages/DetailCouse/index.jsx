import { Typography } from "@material-ui/core";
import React, { Component } from "react";
import wrapper from "../../HOCs/functionWrapper"

class DetailCourse extends Component {
  render() {
    return (
      <>
        <Typography component="h2">this is Detail page</Typography>
      </>
    );
  }
}
export default  wrapper(DetailCourse);