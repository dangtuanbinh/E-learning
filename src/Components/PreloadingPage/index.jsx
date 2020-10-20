import { Box } from "@material-ui/core";
import React from "react";
import "./index.scss";

const PreloadingPage = () => {
  return (
    <>
      <Box className="preloadingPage">
        <Box className="preloadingPage__container">
          <Box className="preloadingPage__box">
            <Box className="preloadingPage__item preloadingPage__item--1"></Box>
            <Box className="preloadingPage__item preloadingPage__item--2"></Box>
            <Box className="preloadingPage__item preloadingPage__item--3"></Box>
            <Box className="preloadingPage__item preloadingPage__item--4"></Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};
export default PreloadingPage;
