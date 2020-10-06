import { Typography } from "@material-ui/core";
import React, { Component } from "react";
import wrapper from "../../HOCs/functionWrapper"

class Event extends Component {
  render() {
    return (
      <>
        <Typography component="h2">this is Event page</Typography>
      </>
    );
  }
}
export default wrapper(Event);