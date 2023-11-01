import Button from "react-bootstrap/Button";
import React from "react";
import qZone1 from "../../src/assets/qZone1.png";
import qZone2 from "../../src/assets/qZone2.png";
import qZone3 from "../../src/assets/qZone3.png";
import bg from "../../src/assets/bg.png";

import {
  FaGoogle,
  FaGithub,
  FaFacebook,
  FaTwitter,
  FaInstagramSquare,
} from "react-icons/fa";
import { ListGroup } from "react-bootstrap";

const RightNav = () => {
  return (
    <div>
      <div className="my-3">
        <h4>Login With</h4>
        <Button className="my-2" variant="outline-primary">
          <FaGoogle /> Login With Google
        </Button>
        <Button variant="outline-secondary">
          {" "}
          <FaGithub /> Login With Gitbub
        </Button>
      </div>

      <div>
        <h4>Find Us On</h4>
        <ListGroup>
          <ListGroup.Item>
            {" "}
            <FaFacebook /> Facebook
          </ListGroup.Item>
          <ListGroup.Item>
            {" "}
            <FaTwitter /> Twitter
          </ListGroup.Item>
          <ListGroup.Item>
            {" "}
            <FaInstagramSquare /> nstagram
          </ListGroup.Item>
        </ListGroup>
      </div>

      <div className="bg-light p-2 my-3">
        <h4>Q-zone</h4>
        <img className="img-fluid" src={qZone1} alt="" />
        <img className="img-fluid" src={qZone2} alt="" />
        <img className="img-fluid" src={qZone3} alt="" />
      </div>

      <div className="position-relative">
        <div>
          <img className="img-fluid" src={bg} alt="" />
        </div>
        <div className="position-absolute bottom-0 start-0 pb-5">
          <div className="text-center text-info">
            <h2 className="pb-3">Create an Amazing Newspaper</h2>
            <p>
              Discover thousands of options, easy to customize layouts,
              one-click to import demo and much more.
            </p>
            <Button className="mt-3 px-4 py-3 rounded-0" variant="danger">
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightNav;
