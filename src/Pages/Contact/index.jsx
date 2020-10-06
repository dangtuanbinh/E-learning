import { Typography } from "@material-ui/core";
import React, { Component } from "react";
import wrapper from "../../HOCs/functionWrapper"

class Contact extends Component {
  render() {
    return (
      <>
        <Typography component="h2">this is Contact page</Typography>
      </>
    );
  }
}
export default wrapper(Contact);
