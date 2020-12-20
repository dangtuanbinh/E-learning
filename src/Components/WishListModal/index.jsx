import { Box } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
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
import { useSelector } from "react-redux";
import WishListItem from "../../Components/WishListItem/index"

import "./index.scss";


const WishListModal = (props) => {
  let { modal, toggleModal } = props;
  // Get wish list
  const wishList = useSelector((state) => {
    return state.wishList.wishList;
  });
  useEffect (() => {
    console.log(wishList)
  }, [wishList])
  // End of get wish list

  // Render WishListItem
  const renderWishListItem = () => {
    if (!wishList) return null;
    return wishList.map((course,index) => {
      return <WishListItem course ={course} key={index} />
    })
  }
  // End of render WishListItem
  return (
    <>
      <Box className="wishListModal">
        <Modal isOpen={modal} toggle={toggleModal}>
          <ModalHeader className="wishListModal__header">
            Welcome back coder!
          </ModalHeader>
          <ModalBody>
            {renderWishListItem()}
          </ModalBody>
          <ModalFooter>
            <Button color="primary">Cancel</Button>
            <Button color="secondary">Confirm</Button>
          </ModalFooter>
        </Modal>
      </Box>
    </>
  );
};
export default WishListModal;
