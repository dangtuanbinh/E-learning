import { Box, TextField } from "@material-ui/core";
import React from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

import "./index.scss";

const SearchModal = ({ searchModal, toggleSearchModal }) => {
  return (
    <>
      <Modal isOpen={searchModal} toggle={toggleSearchModal}>
        <ModalHeader toggle={toggleSearchModal}>
          Finding your suitable course
        </ModalHeader>
        <ModalBody>
          <Box className="searchModal__container">
            <TextField id="standard-basic" label="Course search" />
            <Button variant="contained">Search</Button>
          </Box>
        </ModalBody>
      </Modal>
    </>
  );
};

export default SearchModal;
