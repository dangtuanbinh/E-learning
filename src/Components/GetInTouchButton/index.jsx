import { Box } from "@material-ui/core";
import React from "react";
import { NavLink, withRouter } from "react-router-dom";
import "./index.scss";

const GetInTouchButton = () => {
  return (
    <>
      <Box className="getInTouchButton">
        <Box className="getInTouchButton__container">
          <NavLink className="getInTouchButton__link" exact to="/contact">
            GET IN TOUCH
          </NavLink>
        </Box>
      </Box>
    </>
  );
};
export default withRouter(GetInTouchButton);
