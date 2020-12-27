import { Box } from "@material-ui/core";
import React from "react";
import { NavLink, withRouter } from "react-router-dom";
import "./index.scss";

const PageBanner = () => {
  return (
    <>
      <Box className="pageBanner">
        <Box>
          <Box className="pageBanner__text">
            <h3>About Us</h3>
            <Box className="pageBanner__subText">
              <NavLink className="pageBanner__link" to="/">Home</NavLink>
              <p>/  About us</p>
            </Box>
          </Box>
          <Box className="pageBanner__image"></Box>
        </Box>
      </Box>
    </>
  );
};
export default withRouter(PageBanner);
