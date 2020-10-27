import React from "react";
import { Box } from "@material-ui/core";
import "./index.scss";
import SmallButton from '../SmallButton/index'

const AdverBannerContent = () => {
  return (
    <>
        <Box className="adverBannerContent">
          <h1>
            Limited Time Offer:
            <br /> Get our 2 courses for free !
          </h1>
          <p>
            We are giving away 2 basic coding courses for those who sign in
            first.
          </p>
          <Box>
            <SmallButton />
          </Box>
        </Box>
    </>
  );
};
export default AdverBannerContent;
