import { Box, Container, TextField } from "@material-ui/core";
import React, { useState } from "react";
import PageHeader from "../../Components/PageHeader/index";
import Footer from "../../Components/Footer/index";
import PreloadingPage from "../../Components/PreloadingPage/index";
import PageBanner from "../../Components/PageBanner/index";
import "./index.scss";
import { Col, Row } from "reactstrap";

const SignUp = () => {
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
              <form className="signUp__form">
                <Box className="signUp__form__content">
                  <Row>
                    <Col className="signUp__item" lg="4">
                      <TextField
                        id="filled-basic"
                        label="Your Fullname"
                        variant="filled"
                        name="hoTen"
                      />
                    </Col>
                    <Col className="signUp__item" lg="4">
                      <TextField
                        id="filled-basic"
                        label="Your Acount"
                        variant="filled"
                        name="taiKhoan"
                      />
                    </Col>
                    <Col className="signUp__item" lg="4">
                      <TextField
                        id="filled-basic"
                        label="Password"
                        variant="filled"
                        name="matKhau"
                      />
                    </Col>
                    <Col className="signUp__item" lg="4">
                      <TextField
                        id="filled-basic"
                        label="Phone number"
                        variant="filled"
                        name="soDt"
                      />
                    </Col>
                    <Col className="signUp__item" lg="4">
                      <TextField
                        id="filled-basic"
                        label="Email Address"
                        variant="filled"
                        name="email"
                      />
                    </Col>
                    <Col className="signUp__item" lg="4">
                      <TextField
                        id="filled-basic"
                        label="Group ID"
                        variant="filled"
                        name="maNhom"
                      />
                    </Col>
                  </Row>
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
