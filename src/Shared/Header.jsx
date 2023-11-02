import React, { useContext } from "react";
import logo from "../../src/assets/logo.png";
import moment from "moment";
import Marquee from "react-fast-marquee";
import { Container } from "react-bootstrap";

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
    </Container>
  );
};

export default Header;
