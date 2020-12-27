import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import SearchModal from "../../Components/SearchModal/index";
import useModal from "../../HOCs/useModal";
import { Box } from "@material-ui/core";
import "./index.scss";
import Badge from "reactstrap/lib/Badge";

const SearchButton = () => {
  const { modal, toggle } = useModal();
  const renderSearchModal = () => {
    return <SearchModal searchModal={modal} toggleSearchModal={toggle} />;
  };
  return (
    <>
      <Box onClick={toggle} className="searchButton">
        <SearchIcon />
      </Box>
      {renderSearchModal()}
    </>
  );
};

export default SearchButton;
