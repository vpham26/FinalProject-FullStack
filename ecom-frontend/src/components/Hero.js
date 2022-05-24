import React from "react";
import { Row, Col, Container, Button } from "react-bootstrap";

const Hero = () => {
  return (
    <div className="hero-span">
      <Row>
        <Col className="hero" md={7}>
          <br></br>
          <br></br>
          <br></br>
          <span>
            Lorem ipsum dolor sit amet, consectetur
          </span>

          <p>
            Lorem ipsum dolor sit amet, consectetur.{" "}
          </p>
        </Col>
        <Col md={5} className="my-4">
          <img class="img" src="/images/shopping.svg" alt="something" />
        </Col>
      </Row>
      <br></br>
      <br></br>
    </div>
  );
};

export default Hero;
