import { Typography } from "@material-ui/core";
import React, { useState } from "react";
import Header from "../../Components/Header/index";
import Banner from "../../Components/PageBanner/index";
import Footer from "../../Components/Footer/index";
import DetailCourseItem from "../../Components/DetailCourseItem/index";
import PreloadingPage from "../../Components/PreloadingPage/index";

const DetailCourse = () => {
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
          <DetailCourseItem />
          <Footer />
        </>
      )}
    </>
  );
};
export default DetailCourse;
