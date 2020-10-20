import React from "react";
import wrapper from "../../HOCs/functionWrapper";
import PageBanner from "../../Components/PageBanner/index";
import { useState } from "react";
import PreloadingPage from "../../Components/PreloadingPage/index";
import PageHeader from "../../Components/PageHeader/index";
import Footer from "../../Components/Footer/index";
import Content from "../../Components/AboutContent/index";

const About = () => {
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
          <PageHeader />
          <PageBanner />
          <Content />
          <Footer />
        </>
      )}
    </>
  );
};
export default About;
