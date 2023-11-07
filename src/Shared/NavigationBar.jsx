import React, { useContext } from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const NavigationBar = () => {
  const { user, logOut } = useContext(AuthContext);
  // console.log(user);
  const handleLogout = () => {
    logOut()
      .then()
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <Container>
      <div className="mt-2">
        <Navbar collapseOnSelect expand="lg" className="bg-body-secondary">
          <Container>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mx-auto">
                <Link to="/">Home</Link>

                <Nav.Link href="#pricing">About</Nav.Link>
                <Nav.Link href="#pricing">career</Nav.Link>
              </Nav>
              <Nav>
                {user && (
                  <FaUserCircle style={{ fontSize: "2rem" }}></FaUserCircle>
                )}

                {user ? (
                  <Button onClick={handleLogout} variant="secondary">
                    {" "}
                    Logout
                  </Button>
                ) : (
                  <Link to="/login">
                    <Button variant="secondary"> Login</Button>
                  </Link>
                )}
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </Container>
  );
};

export default NavigationBar;
