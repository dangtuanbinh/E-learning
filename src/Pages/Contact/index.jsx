import { Typography } from "@material-ui/core";
import React, { useState } from "react";
import Header from "../../Components/Header/index";
import Banner from "../../Components/PageBanner/index";
import Content from "../../Components/ContactUsGetInTouch/index";
import Footer from "../../Components/Footer/index";
import PreloadingPage from "../../Components/PreloadingPage/index";

const Contact = () => {
  const [loadingPage, setLoadingPage] = useState(true);
  setTimeout(() => {
    setLoadingPage(false);
  }, 1200);
  return (
    <>
      {loadingPage ? (
        <PreloadingPage />
      ) : (
        <>
          <Header />
          <Banner />
          <Content />
          <Typography component="h2">this is Contact page</Typography>
          <Footer />
        </>
      )}
    </>
  );
};
export default Contact;
