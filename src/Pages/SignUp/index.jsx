import {
  Box,
  Checkbox,
  Container,
  FormControlLabel,
  TextField,
} from "@material-ui/core";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Header from "../../Components/Header/index";
import Footer from "../../Components/Footer/index";
import PreloadingPage from "../../Components/PreloadingPage/index";
import PageBanner from "../../Components/PageBanner/index";
import "./index.scss";
import { Col, Row } from "reactstrap";
import {signUp} from "../../Redux/Actions/userAction"

const SignUp = () => {
  // Handle Submit
  const dispatch = useDispatch();
  const [userInfo, setUserInfo] = useState({
    taiKhoan: "",
    matKhau: "",
    hoTen: "",
    soDT: "",
    maNhom: "GP01",
    email: "",
  });

  const handleUserChange = (e) => {
    setUserInfo({...userInfo,
      [e.target.name]:e.target.value
    });
    
  };
  const handleSubmit = (e) => { 
    e.preventDefault();
    dispatch(signUp(userInfo));
    
  };
  // End of Handle Submit

  // Loading page
  const [loadingPage, setLoadingPage] = useState(true);
  setTimeout(() => {
    setLoadingPage(false);
  }, 1200);
  // End of loading page

  // Checkbox set up
  const [state, setState] = useState({
    checked: false,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  // End of check box set up
  return (
    <>
      {loadingPage ? (
        <PreloadingPage />
      ) : (
        <>
          <Header />
          <PageBanner />
          <Box className="signUp">
            <Container>
              <Box className="signUp__text">
                <h3>Welcome newbie</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Placeat vero mollitia, voluptatibus deserunt quis enim
                  perspiciatis, beatae tempore asperiores illo aperiam ab
                  suscipit nulla officiis doloremque hic. Labore natus minus
                  excepturi iusto ab architecto nobis vitae exercitationem, non
                  deleniti, molestias, commodi dolor sequi itaque ut rerum
                  sapiente reiciendis qui in.
                </p>
              </Box>
              <form onSubmit={handleSubmit} className="signUp__form">
                <Box className="signUp__form__content">
                  <Row>
                    <Col className="signUp__item" lg="4">
                      <TextField
                        onChange={handleUserChange}
                        label="Your Acount"
                        variant="filled"
                        name="taiKhoan"
                      />
                    </Col>
                    <Col className="signUp__item" lg="4">
                      <TextField
                      type="password"
                        onChange={handleUserChange}
                        label="Password"
                        variant="filled"
                        name="matKhau"
                      />
                    </Col>
                    <Col className="signUp__item" lg="4">
                      <TextField
                        onChange={handleUserChange}
                        label="Your Fullname"
                        variant="filled"
                        name="hoTen"
                      />
                    </Col>
                    <Col className="signUp__item" lg="4">
                      <TextField
                        onChange={handleUserChange}
                        label="Phone number"
                        variant="filled"
                        name="soDt"
                      />
                    </Col>
                    <Col className="signUp__item" lg="4">
                      <TextField
                        onChange={handleUserChange}
                        label="Email Address"
                        variant="filled"
                        name="email"
                      />
                    </Col>
                    
                  </Row>
                </Box>
                <Box>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={state.checked}
                        onChange={handleChange}
                        name="checked"
                      />
                    }
                    label="By clicking here, you confirm that you have read and understand our Policy and User Guildlines."
                  />
                </Box>
                <Box className="signUp__button">
                  <Box>
                    <button type="submit" className="signUp__container">
                      Sign up
                    </button>
                  </Box>
                </Box>
              </form>
            </Container>
          </Box>
          <Footer />
        </>
      )}
    </>
  );
};
export default SignUp;
