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
import { Box } from "@material-ui/core";
import { useSelector } from "react-redux";
import SignInButton from "../../Components/SignInButton/index";
import Switch from "@material-ui/core/Switch";
import LogInUser from "../../Components/LogInUser/index";
import ViewListIcon from "@material-ui/icons/ViewList";
import useModal from "../../HOCs/useModal";
import WishListModal from "../../Components/WishListModal/index";

const Header = () => {
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
  // End of header size change

  // Switch
  const [state, setState] = React.useState({
    checked: true,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };
  // End of switch

  // NavBar Toggler
  const [isOpen, setIsOpen] = useState(false);
  const navBarToggle = () => setIsOpen(!isOpen);
  // End of navBar Toggler

  // Set up Login user
  const loggedInUser = useSelector((state) => {
    return state.auth.loggedInUser;
  });
  // End of user login

  // Wish list modal setup
  const {modal, toggle} = useModal();
  const renderWishListModal = () =>{
    return <WishListModal modal={modal} toggleModal={toggle}/>
  }
  // End of modal setup
  return (
    <>
      <Box className="header">
        <Box
          className={navBar ? "header__container__scroll" : "header__container"}
        >
          <Navbar light expand="md">
            <NavbarBrand>
              <Box className="header__navBrand">
                <img src={logo}></img>
              </Box>
            </NavbarBrand>
            <NavbarToggler onClick={navBarToggle} />
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
                    <DropdownToggle className="header__navLink" nav >
                      Course
                    </DropdownToggle>
                    <DropdownMenu right>
                      <DropdownItem href="#category">Category</DropdownItem>
                      <DropdownItem href="#course">
                        Popular courses
                      </DropdownItem>
                      <DropdownItem divider />
                      <DropdownItem>
                        <NavLink to="/courses">All Course</NavLink>
                      </DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                  <Box className="header__icon">
                    {/* Signin Button */}
                    <Box>
                      {loggedInUser ? <LogInUser /> : <SignInButton />}
                      {/* <LogInUser /> */}
                    </Box>

                    {/* Search Icon */}
                    <Box className="header__searchIcon">
                      <SearchIcon  />
                    </Box>

                    {/* Wish-list icon */}
                     <Box onClick={toggle} className="header__listIcon">
                      <ViewListIcon  />
                      {renderWishListModal()}
                    </Box>

                    {/* Switch button */}
                    <Box className = "header__switch">
                      <Switch
                        checked={state.checked}
                        onChange={handleChange}
                        name="checked"
                        inputProps={{ "aria-label": "primary checkbox" }}
                      />
                    </Box>
                  </Box>
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
