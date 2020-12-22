import React, {useState} from "react";
import Header from "../../Components/Header/index";
import PreloadingPage from "../../Components/PreloadingPage/index";
import DashBoard from "../../Components/DashBoard/index";

const Admin = () => {
  //Loading Page
  const [loadingPage, setLoadingPage] = useState(true);
  setTimeout(() => {
    setLoadingPage(false);
  }, 1200);
  // End of loaing page
  return (
    <>
      {loadingPage ? (
        <PreloadingPage />
      ) : (
        <>
          <Header />
          <DashBoard />
        </>
      )}
    </>
  );
};

export default Admin;
