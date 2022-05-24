import React from "react";
import { Row, Col, Container, Button } from "react-bootstrap";
import Meta from "../components/Meta";

const ContactScreen = () => {
  return (
    <>
      <Meta title={"Contact"} />
      <Container>
        <p className="head">Contact.</p>
        <br></br>
        <br></br>
        <div className="border-top">
          <br></br>
          <br></br>
          <br></br>
          <p className="head ">
            Lorem ipsum dolor sit amet, consectetur
          </p>
          <p className="p-width">
            Lorem ipsum dolor sit amet, consectetur
          </p>
          <br></br>
          <a className="my-2">+1 555-555-5555 📞</a>
          <br></br>
          <a className="my-2">
            +1 555-555-5555{" "}
            <img
              src="https://img.icons8.com/office/16/000000/whatsapp--v1.png"
              alt="whatsapp"
            />
          </a>
          <br></br>
          <a className="my-2" href="mailto:marijuana.dispensery@gmail.com">
            marijuana.dispensery@gmail.com 📧
          </a>
        </div>
        <br></br>
        <br></br>
        <br></br>
      </Container>
    </>
  );
};

export default ContactScreen;
