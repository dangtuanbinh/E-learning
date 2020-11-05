import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import React, { useState,useEffect } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import logo from "../../Assets/img/horizontal_on_white_by_logaster-removebg-preview.png";
import { Box, Switch } from "@material-ui/core";
import SignInButton from "../../Components/SignInButton/index";
import LogInUser from "../../Components/LogInUser/index";
import SearchIcon from "@material-ui/icons/Search";
import ViewListIcon from "@material-ui/icons/ViewList";
import "./index.scss";

const PageHeader = () => {
  // Header size change
  const [navBar, setNavBar] = useState(false);
  const changeNavBar = () => {
    if (window.scrollY > 20) {
      setNavBar(true);
    } else {
      setNavBar(false);
    }
  };
  window.addEventListener("scroll", changeNavBar);

  // NavBar Toggler
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  // End of NavBar Toggler

  // Switch
  const [state, setState] = React.useState({
    checked: true,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };
  // End of switch

  // Login Setup
  const loggedInUser = useSelector((state) => {
    return state.auth.loggedInUser;
  });
  // End of login Setup

  // const [redirect, setRedirect] = useState(null);
  // useEffect(
  //   setTimeout(() => {
  //     if (localStorage.getItem("accessToken")) {
  //       setRedirect("/");
  //     }
  //   }, 500),
  //   []
  // );
  // if (redirect) {
  //     return <Redirect to={redirect} />;
  //   }
  
  return (
    <>
      <Box className="pageHeader">
        <Navbar
          light
          className={
            navBar
              ? "pageHeader__navBar__container--scroll"
              : "pageHeader__navBar__container"
          }
          expand="md"
        >
          <NavbarBrand>
            <Box className="pageHeader__navBrand">
              <img src={logo} alt="logo"></img>
            </Box>
          </NavbarBrand>
          <NavbarToggler dark onClick={toggle} />
          <Collapse className="pageHeader__navBar" isOpen={isOpen} navbar>
            <Box>
              <Nav className="pageHeader__nav" navBar>
                <NavItem className="pageHeader__navItem">
                  <NavLink className="pageHeader__navLink" to="/">
                    Home
                  </NavLink>
                  <Box className="pageHeader__underline"></Box>
                </NavItem>
                <NavItem>
                  <NavLink className="pageHeader__navLink" to="/about">
                    About Us
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="pageHeader__navLink" to="/event">
                    Event
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="pageHeader__navLink" to="/contact">
                    Contact
                  </NavLink>
                </NavItem>

                <UncontrolledDropdown nav inNavbar>
                  <DropdownToggle className="pageHeader__navLink" nav caret>
                    Course
                  </DropdownToggle>
                  <DropdownMenu right>
                    <DropdownItem href="#category">Category</DropdownItem>
                    <DropdownItem href="#course">Popular courses</DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem>
                      <NavLink to="/courses">All Course</NavLink>
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
                {/* Sign in button */}
                <Box>{loggedInUser ? <LogInUser /> : <SignInButton />}</Box>

                {/* Search Icon */}
                <Box className="pageHeader__searchIcon">
                  <SearchIcon  />
                </Box>

                {/* Wish-list icon */}
                <Box className="pageHeader__listIcon">
                      <ViewListIcon  />
                    </Box>

                {/* Switch button */}
                <Box className="pageHeader__switch">
                  <Switch
                    checked={state.checked}
                    onChange={handleChange}
                    name="checked"
                    inputProps={{ "aria-label": "primary checkbox" }}
                  />
                </Box>
              </Nav>
            </Box>
          </Collapse>
        </Navbar>
      </Box>
    </>
  );
};
export default PageHeader;
