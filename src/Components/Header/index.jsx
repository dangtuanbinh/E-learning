// import {
//   AppBar,
//   Button,
//   Toolbar,
//   Container,
//   Typography,
//   Box,
// } from "@material-ui/core";
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
import React, { useState } from "react";
import SearchIcon from "@material-ui/icons/Search";
import { NavLink } from "react-router-dom";
import "./index.scss";
import logo from "../../Assets/img/horizontal_on_white_by_logaster-removebg-preview.png";
import { Box, Button, Container } from "@material-ui/core";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  return (
    <>
      {/* <AppBar className="header">
          <Container className="header__appBar">
            <Toolbar>
              <Typography className="header__navBrand">
                <img src={logo}></img>
              </Typography>
              <Box textAlign="center" className="header__navBar" justifyContent="center">
                <NavLink to="/" className="header__navLink">Home</NavLink>
                <NavLink to="/about" className="header__navLink">About us</NavLink>
                <NavLink to="/course" className="header__navLink">Courses</NavLink>
                <NavLink to="/event" className="header__navLink">Events</NavLink>
                <NavLink to="/contact" className="header__navLink">Contact</NavLink>
              </Box>
              <Box justifyContent="flex-end"  className="header__leftNav">
                <Button
                  variant="contained"
                  color="secondary"
                  className="header__loginButton"
                >
                  Sign in
                </Button>
                <div className="header__search">
                  <SearchIcon />
                </div>
              </Box>
            </Toolbar>
          </Container>
        </AppBar> */}
      <Box className="header">
        <Container>
          <Navbar color="light" light className="header__navBar" expand="md">
            <NavbarBrand>
              <Box className="header__navBrand">
                <img src={logo}></img>
              </Box>
            </NavbarBrand>
            <NavbarToggler onClick={toggle} />
            <Collapse className="header__navBar" isOpen={isOpen} navbar>
              <Box>
                <Nav className="mr-auto header__nav" navBar>
                  <NavItem>
                    <NavLink className="header__navLink" to="/">
                      Home
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink className="header__navLink" to="/about">
                      About Us
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink className="header__navLink" to="/event">
                      Event
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink className="header__navLink" to="/contact">
                      Contact
                    </NavLink>
                  </NavItem>

                  <UncontrolledDropdown nav inNavbar>
                    <DropdownToggle className="header__navLink" nav caret>
                      Course
                    </DropdownToggle>
                    <DropdownMenu right>
                      <DropdownItem href="#category">Category</DropdownItem>
                      <DropdownItem href="#course">
                        Popular courses
                      </DropdownItem>
                      <DropdownItem divider />
                      <DropdownItem>
                        <NavLink to="/course">All Course</NavLink>
                      </DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown>

                  <Button
                    variant="contained"
                    color="secondary"
                    className="header__loginButton"
                  >
                    Sign in
                  </Button>
                </Nav>
              </Box>
            </Collapse>
          </Navbar>
        </Container>
      </Box>
    </>
  );
};
export default Header;
