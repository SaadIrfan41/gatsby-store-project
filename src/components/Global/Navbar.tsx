import React from "react"
import { Link } from "gatsby"

import logo from "../../images/logo.png"
import { Container, Nav, Navbar } from "react-bootstrap"

const Header = () => {
  return (
    <Navbar className="color-nav" expand="lg" variant="dark" collapseOnSelect>
      <Container>
        <Navbar.Brand>
          <img src={logo} width="100%" height="70px" />{" "}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <Link to="/" className="nav-link text-capitalize ml-sm-5">
              Home
            </Link>
            <Link to="/about" className="nav-link text-capitalize ml-sm-5 ">
              About
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header
