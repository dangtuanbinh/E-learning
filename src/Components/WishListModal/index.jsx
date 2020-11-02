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

import "./index.scss";

const WishListModal = (props) => {
  let { modal, toggleModal } = props;
  return (
    <>
      <Box className="wishListModal">
        <Modal isOpen={modal} toggle={toggleModal}>
          <ModalHeader className="wishListModal__header">
            Welcome back coder!
          </ModalHeader>
          <ModalBody>
              <h1>Wishlist</h1>
          </ModalBody>
        </Modal>
      </Box>
    </>
  );
};
export default WishListModal;
