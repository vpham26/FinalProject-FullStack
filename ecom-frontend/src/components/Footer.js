import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const footer = () => {
  return (
    <Container color="blue" className="font-small pt-4 mt-4 border-top">
      <Container fluid className="text-center text-md-left">
        <Row>
          <Col md="6">
            <h5 className="title">Marijuana Dispensery.</h5>
            <p>For the best products and service.</p>
          </Col>
          <Col md="6">
            <h5 className="title">Contact.</h5>
            <ul className="pad">
              <li className="list-unstyled">
                <a href="#!">+1 555-5555-555 📞</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">
                  +1 555-5555-555{" "}
                  <img
                    src="https://img.icons8.com/office/16/000000/whatsapp--v1.png"
                    alt="whatsapp"
                  />
                </a>
              </li>
              <li className="list-unstyled">
                <a href="mailto:marijuana.ispensery@gmailcom">
                  marijuana.dispensery@gmailcom 📧
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
      <div className="footer-copyright text-center py-3">
        <Container fluid>
          &copy; {new Date().getFullYear()} Copyright:{" "}
          <a>
            {" "}
            MarijuanaDispensery made with ❤️ by{" "}
            <a href="">GroupX</a>{" "}
          </a>
        </Container>
      </div>
    </Container>
  );
};

export default footer;
