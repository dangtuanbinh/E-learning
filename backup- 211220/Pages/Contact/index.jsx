import React, { useState } from "react";
import PageHeader from "../../Components/PageHeader/index";
import Banner from "../../Components/PageBanner/index";
import ContactGetInTouch from "../../Components/ContactUsGetInTouch/index";
import ContactMap from "../../Components/ContactMap";
import ContactContactDetail from "../../Components/ContactContactDetail";
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
          <PageHeader />
          <Banner />
          <ContactMap />
          <ContactContactDetail />
          <ContactGetInTouch />
        </>
      )}
    </>
  );
};
export default Contact;
