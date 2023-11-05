import React from "react";
import { useContext } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import { useState } from "react";

const Register = () => {
  const { createUser } = useContext(AuthContext);
  const [userName, setUserName] = useState("");
  const [photoUrl, setPhotoUrl] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");

  const handleUserName = (e) => {
    const user = e.target.value;
    setUserName(user);
  };

  const handleUserPhoto = (e) => {
    const usePhoto = e.target.value;
    setPhotoUrl(usePhoto);
  };

  const handleUserEmail = (e) => {
    const email = e.target.value;
    setUserEmail(email);
    console.log(email);
  };

  const handleUserPassword = (e) => {
    const password = e.target.value;
    setUserPassword(password);
    console.log(password);
  };

  const handleRegister = (e) => {
    e.preventDefault();
    createUser(userEmail, userPassword)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Container>
      <Form onSubmit={handleRegister} className="mx-auto w-50 mt-5">
        <h3 className="mb-4">Please Register</h3>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            value={userName}
            required
            placeholder="Enter you name"
            onChange={handleUserName}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Photo URL</Form.Label>
          <Form.Control
            type="url"
            name="photo"
            value={photoUrl}
            required
            placeholder="Your photo url"
            onChange={handleUserPhoto}
          />
        </Form.Group>
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
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check
            type="checkbox"
            name="accept"
            label="Accept the terms and conditions"
          />
          <Form.Text className="text-danger"></Form.Text>
        </Form.Group>

        <Button variant="primary" type="submit">
          Register
        </Button>

        <Form.Group>
          <Form.Text>
            Already Have an Account? <Link to="/login">Please login</Link>
          </Form.Text>
        </Form.Group>
      </Form>
    </Container>
  );
};

export default Register;
