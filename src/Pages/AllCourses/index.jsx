
import React, { useState } from "react";
import Header from "../../Components/Header/index";
import PageBanner from "../../Components/PageBanner/index";
import Footer from "../../Components/Footer/index";
import PreloadingPage from "../../Components/PreloadingPage/index";
import Course from "../../Components/Course/index"
import "./index.scss";


const AllCourses = () => {
  // Preloading page
  const [loadingPage, setLoadingPage] = useState(true);
  setTimeout(() => {
    setLoadingPage(false);
  }, 1200);
  // End of preloading page
  return (
    <>
      {loadingPage ? (
        <PreloadingPage />
      ) : (
        <>
          <Header />
          <PageBanner />
          <Course />
          <Footer />
        </>
      )}
    </>
  );
};
export default AllCourses;
