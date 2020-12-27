import React, { useState } from "react";
import Footer from "../../Components/Footer";
import Banner from "../../Components/PageBanner/index";
import Header from "../../Components/Header";
import SingleEventDetail from "../../Components/SingleEventDetail";
import PreloadingPage from "../../Components/PreloadingPage/index";

const SingleEvent = () => {
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
          <SingleEventDetail />
          <Footer />
        </>
      )}
    </>
  );
}

export default SingleEvent;
