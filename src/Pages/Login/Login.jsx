import React, { useContext, useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import AuthProvider, { AuthContext } from "../../provider/AuthProvider";

const Login = () => {
  const { userSignIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  // console.log(location);
  const from = location.state?.from?.pathname || "/category/0";

  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");

  const handleUserEmail = (e) => {
    const email = e.target.value;
    setUserEmail(email);
    // console.log(email);
  };

  const handleUserPassword = (e) => {
    const password = e.target.value;
    setUserPassword(password);
    // console.log(password);
  };

  const handleUserSingIn = (e) => {
    e.preventDefault();
    userSignIn(userEmail, userPassword)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
      })
      .catch((error) => {
        console.log(error);
      });
    navigate(from, { replace: true });
  };

  return (
    <Container>
      <Form onSubmit={handleUserSingIn} className="mx-auto w-50 mt-5">
        <h3 className="mb-4">Please Login</h3>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            name="email"
            value={userEmail}
            required
            placeholder="Enter email"
            onChange={handleUserEmail}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            placeholder="Password"
            value={userPassword}
            required
            onChange={handleUserPassword}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>

        <Form.Group>
          <Form.Text>
            Don't Have an Account? <Link to="/register">Please Register</Link>
          </Form.Text>
        </Form.Group>
      </Form>
    </Container>
  );
};

export default Login;
