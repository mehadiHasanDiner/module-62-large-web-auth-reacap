import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import LeftNav from "../../Shared/LeftNav";
import RightNav from "../../Shared/RightNav";

const Home = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col lg={3}>
            <LeftNav></LeftNav>
          </Col>
          <Col lg={6}>sm=4</Col>
          <Col lg={3}>
            <RightNav></RightNav>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;
