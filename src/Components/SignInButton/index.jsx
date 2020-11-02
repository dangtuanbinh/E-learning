import { Box } from "@material-ui/core";
import React from "react";
import SignInModal from "../../Components/SignInModal/index";
import useModal from "../../HOCs/useModal";
import "./index.scss";

const SignInButton = () => {
  // Setup modal
  const {modal, toggle} = useModal();
  const renderModal = () =>{
    return <SignInModal modal={modal} toggle={toggle}/>
  }
  // End of setup modal
  return (
    <>
      <Box className="signInButton">
        <Box className="signInButton__link" onClick={toggle}>
          <p>Log in</p>
        </Box>
        {renderModal()}
      </Box>
    </>
  );
};
export default SignInButton;
