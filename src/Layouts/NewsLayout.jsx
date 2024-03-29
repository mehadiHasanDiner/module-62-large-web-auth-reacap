import React from "react";
import Header from "../Shared/Header";
import { Outlet } from "react-router-dom";
import Footer from "../Shared/Footer";
import { Col, Container, Row } from "react-bootstrap";
import RightNav from "../Shared/RightNav";

const NewsLayout = () => {
  return (
    <div>
      <Header></Header>

      <Container>
        <Row>
          <Col lg={9}>
            <Outlet></Outlet>
          </Col>
          <Col lg={3}>
            <RightNav></RightNav>
          </Col>
        </Row>
      </Container>

      <Footer></Footer>
    </div>
  );
};

export default NewsLayout;
