import React from "react";
import logo from "../../src/assets/logo.png";
import moment from "moment";
import Marquee from "react-fast-marquee";
import { Button, Container, Nav, NavDropdown, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Container>
      <div className="text-center">
        <img src={logo} alt="" />
        <p>
          <small>Journalism Without Fear or Favour</small>
        </p>
        <p>{moment().format("dddd, MMMM D, YYYY")}</p>
      </div>
      <div className="d-flex p-2 bg-secondary">
        <button className="btn btn-danger">Latest</button>
        <div>
          <Marquee>
            I can be a React component, multiple React components, or just some
            text......
          </Marquee>
        </div>
      </div>

      <div className="mt-2">
        <Navbar collapseOnSelect expand="lg" className="bg-body-secondary">
          <Container>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mx-auto">
                <Nav.Link>
                  <Link to="/">Home</Link>
                </Nav.Link>
                <Nav.Link href="#pricing">About</Nav.Link>
                <Nav.Link href="#pricing">career</Nav.Link>
              </Nav>
              <Nav>
                <Nav.Link href="#deets">Profile</Nav.Link>
                <Nav.Link eventKey={2} href="#memes">
                  <Button variant="secondary"> Login</Button>
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </Container>
  );
};

export default Header;
