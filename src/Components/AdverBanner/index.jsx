import React from "react";
import "./index.scss";
import AdverBannerContent from "../AdverBannerContent/index";
import { Box, Container } from "@material-ui/core";

const AdverBanner = () => {
  return (
    <>
      <Box className="adverBanner">
        <Container className="adverBanner__container">
          <Box className="adverBanner__content">
            <AdverBannerContent />
          </Box>
        </Container>
      </Box>
    </>
  );
};
export default AdverBanner;
