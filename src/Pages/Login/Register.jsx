import React from "react";
import { useContext } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import { useState } from "react";

const Register = () => {
  const { createUser, updateUser } = useContext(AuthContext);
  const [userName, setUserName] = useState("");
  const [imgUrl, setImgUrl] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [accepted, setAccepted] = useState(false);

  const handleUserName = (e) => {
    const user = e.target.value;
    setUserName(user);
  };

  const handleUserPhoto = (e) => {
    const photo = e.target.value;
    setImgUrl(photo);
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

    // updateUser({ displayName: userName, photoUrl: imgUrl })
    //   .then((result) => {
    //     const loggedUser = result.user;
    //     console.log(loggedUser);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });

    // const userInfo = { displayName: userName, photoUrl: imgUrl };
    // console.log(userInfo);
  };

  const handleAccepted = (event) => {
    setAccepted(event.target.checked);
  };

  return (
    <Container>
      <Form onSubmit={handleRegister} className="mx-auto w-50 mt-5">
        <h3 className="mb-4">Please Register</h3>
        <Form.Group className="mb-3" controlId="formBasicName">
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
        <Form.Group className="mb-3" controlId="formBasicPhoto">
          <Form.Label>Photo URL</Form.Label>
          <Form.Control
            type="url"
            name="photo"
            value={imgUrl}
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
            onClick={handleAccepted}
            type="checkbox"
            name="accept"
            label={
              <>
                Accept <Link to="/terms">the terms and conditions</Link>
              </>
            }
          />
          <Form.Text className="text-danger"></Form.Text>
        </Form.Group>

        <Button variant="primary" type="submit" disabled={!accepted}>
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
