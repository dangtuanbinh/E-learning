import { Typography } from "@material-ui/core";
import React, { Component } from "react";
import wrapper from "../../HOCs/functionWrapper"

class About extends Component {
  render() {
    return (
      <>
        <Typography component="h2">this is About page</Typography>
      </>
    );
  }
}
export default wrapper(About);
