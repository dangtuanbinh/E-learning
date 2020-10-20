
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
import { Box, Button} from "@material-ui/core";
import {useEffect} from "react"
import SignInButton from "../../Components/SignInButton/index"

const Header = () => {
  // Header size change
  // useEffect(() => {
  //   window.addEventListener("scroll",handleScroll)
  // },[])
  // useEffect(() =>{
  //   return removeHandleScroll();
  // },[])
  // const handleScroll = () =>{
  //   if (window.scrollY > 70){
  //     document.querySelector(".header__container").className = "header__container__scroll";
  //   }
    //  else {
    //   document.querySelector(".header__container").className ="header__container"
    // }
  // }
  // const removeHandleScroll = () =>{
  //   if (window.scrollY === 0){
  //     document.querySelector(".header__container").className = "header__container"
  //   }
  // }

  // NavBar Toggler
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  return (
    <>
      <Box className="header">
        <Box className="header__container">
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
                  <SignInButton />
                </Nav>
              </Box>
            </Collapse>
          </Navbar>
        </Box>
      </Box>
    </>
  );
};
export default Header;
