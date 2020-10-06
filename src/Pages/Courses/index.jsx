import { Typography } from "@material-ui/core";
import React, { Component } from "react";
import wrapper from "../../HOCs/functionWrapper"

class Course extends Component {
  render() {
    return (
      <>
        <Typography component="h2">this is Course page</Typography>
      </>
    );
  }
}
export default  wrapper(Course);