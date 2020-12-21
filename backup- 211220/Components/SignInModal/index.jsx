import { Box } from "@material-ui/core";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import {
  Modal,
  ModalHeader,
  ModalBody,
  Button,
  Form,
  FormGroup,
  Row,
  Col,
} from "reactstrap";
import TextField from "@material-ui/core/TextField";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import { logIn } from "../../Action/userAction";

import "./index.scss";

const SignInModal = (props) => {
  // Modal setup
  let { modal, toggle } = props;
  // End of modal set up

  // Login setup
  const dispatch = useDispatch();
  const [loginUser, setLoginUser] = useState({
    taiKhoan: "",
    matKhau: "",
  });
  const handleOnchange = (e) => {
    setLoginUser({ ...loginUser, [e.target.name]: e.target.value });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(logIn(loginUser));
  };
  // End of log in setup

  return (
    <>
      <Box className="modal">
        <Modal isOpen={modal} toggle={toggle}>
          <ModalHeader toggle={toggle} className="modal__header">
            Welcome back coder!
          </ModalHeader>
          <ModalBody>
            <Row>
              <Col lg="6">
                <Box>
                  <Box>
                    <Form onSubmit={handleLogin}>
                      <FormGroup>
                        <TextField
                          id="standard-basic"
                          label="Username or Email"
                          name="taiKhoan"
                          onChange={handleOnchange}
                        />
                      </FormGroup>
                      <FormGroup>
                        <TextField
                          id="standard-basic"
                          label="Password"
                          type="password"
                          name="matKhau"
                          onChange={handleOnchange}
                        />
                      </FormGroup>
                      <Button color="primary" type="submit">
                        Start learning!
                      </Button>
                    </Form>
                  </Box>
                  <Box className="modal__forgotPassword">
                    <a href="#">Forgot your password or username?</a>
                  </Box>
                </Box>
              </Col>
              {/* Sign up part */}
              <Col lg="6" className="modal__text">
                <Box>
                  <Box className="modal__link">
                    <h6>Don't have an account?</h6>
                    <NavLink to="/signup">Sign up here!</NavLink>
                  </Box>

                  <Box className="modal__icon">
                    <p>or with</p>
                    <Box>
                      <a href="#">
                        <FacebookIcon />
                      </a>
                      <a href="#">
                        <LinkedInIcon />
                      </a>
                    </Box>
                  </Box>
                </Box>
              </Col>
              {/* End uf sign up part */}
            </Row>
          </ModalBody>
        </Modal>
      </Box>
    </>
  );
};
export default SignInModal;
