import React from "react";
import { Link } from "react-router-dom";
import Cookies from 'js-cookie';

import { link } from "config/link";

// reactstrap components
import {
  Button,
  Collapse,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  UncontrolledTooltip,
} from "reactstrap";

function IndexNavbar() {
  const [navbarColor, setNavbarColor] = React.useState("navbar-transparent");
  const [collapseOpen, setCollapseOpen] = React.useState(false);
  React.useEffect(() => {
    const updateNavbarColor = () => {
      if (
        document.documentElement.scrollTop > 399 ||
        document.body.scrollTop > 399
      ) {
        setNavbarColor("");
      } else if (
        document.documentElement.scrollTop < 400 ||
        document.body.scrollTop < 400
      ) {
        setNavbarColor("navbar-transparent");
      }
    };
    window.addEventListener("scroll", updateNavbarColor);
    return function cleanup() {
      window.removeEventListener("scroll", updateNavbarColor);
    };
  });

  const username = Cookies.get("username");

  return (
    <>
      {collapseOpen ? (
        <div
          id="bodyClick"
          onClick={() => {
            document.documentElement.classList.toggle("nav-open");
            setCollapseOpen(false);
          }}
        />
      ) : null}
      <Navbar className={"fixed-top " + navbarColor} expand="lg" color="info">
        <Container>
          <div className="navbar-translate">
            <NavbarBrand to="/" tag={Link} target="_blank" id="navbar-brand">
              Hosting-Service
            </NavbarBrand>
            <UncontrolledTooltip target="#navbar-brand">
              Designed by Nikitin E.E. Coded by Sevenelevon
            </UncontrolledTooltip>
            <button
              className="navbar-toggler navbar-toggler"
              onClick={() => {
                document.documentElement.classList.toggle("nav-open");
                setCollapseOpen(!collapseOpen);
              }}
              aria-expanded={collapseOpen}
              type="button"
            >
              <span className="navbar-toggler-bar top-bar"></span>
              <span className="navbar-toggler-bar middle-bar"></span>
              <span className="navbar-toggler-bar bottom-bar"></span>
            </button>
          </div>
          <Collapse
            className="justify-content-end"
            isOpen={collapseOpen}
            navbar
          >
            <Nav navbar>
              <NavItem>
                <NavLink
                  href="#pablo"
                  onClick={(e) => {
                    e.preventDefault();
                    document
                      .getElementById("download-section")
                      .scrollIntoView();
                  }}
                >
                  <i className="now-ui-icons users_single-02"></i>
                  <p>About me Evgeniy E.E</p>
                </NavLink>
              </NavItem>
              <UncontrolledDropdown nav>
                <DropdownToggle
                  caret
                  color="default"
                  href="#pablo"
                  nav
                  onClick={(e) => e.preventDefault()}
                >
                  <i className="now-ui-icons design_app mr-1"></i>
                  <p>Cloud</p>
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem to="/vps" tag={Link}>
                    <i className="now-ui-icons business_chart-pie-36 mr-1"></i>
                    All VPS
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <NavItem>
                {username ? (
                  <Button
                    className="nav-link btn-neutral"
                    color="info"
                    // href={`/Signin-In`}
                    id="upgrade-to-pro"
                    target="_blank"
                  >
                    <i className="fa fa-user-circle" style={{marginRight: "10px"}}></i>
                    <p> you {username}</p>
                  </Button>
                ) : (
                  <Button
                    className="nav-link btn-neutral"
                    color="info"
                    href={`/Signin-In`}
                    id="upgrade-to-pro"
                    target="_blank"
                  >
                    <i className="now-ui-icons arrows-1_share-66 mr-1"></i>
                    <p>Sign UP</p>
                  </Button>
                )}
              </NavItem>
              <NavItem>
                <NavLink
                  href="https://twitter.com/CreativeTim?ref=creativetim"
                  target="_blank"
                  id="twitter-tooltip"
                >
                  <i className="now-ui-icons objects_globe"></i>
                  <p className="d-lg-none d-xl-none">My project</p>
                </NavLink>
                <UncontrolledTooltip target="#twitter-tooltip">
                  My project
                </UncontrolledTooltip>
              </NavItem>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default IndexNavbar;
