import React, {useState} from "react";
import Header from "../../Components/Header/index";
import Footer from "../../Components/Footer";
import PreloadingPage from "../../Components/PreloadingPage/index";

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
          <h1>This is admin page</h1>
        </>
      )}
    </>
  );
};

export default Admin;
