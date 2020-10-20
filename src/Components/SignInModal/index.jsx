import { Box } from "@material-ui/core";
import React from "react";
import { NavLink } from "react-router-dom";
import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Form,
  FormGroup,
  Row,
  Col,
} from "reactstrap";
import TextField from "@material-ui/core/TextField";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import "./index.scss";

const SignInModal = (props) => {
  let { modal } = props;
  let { toggle } = props;
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
                    <Form>
                      <FormGroup>
                        <TextField
                          id="standard-basic"
                          label="Username or Email"
                        />
                      </FormGroup>
                      <FormGroup>
                        <TextField id="standard-basic" label="Password" />
                      </FormGroup>
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
          <ModalFooter>
            <Button color="primary" onClick={toggle}>
              Start learning now!
            </Button>{" "}
            <Button color="secondary" onClick={toggle}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </Box>
    </>
  );
};
export default SignInModal;
