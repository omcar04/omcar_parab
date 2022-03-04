import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import footerPic from "../images/op-inverted.png";
import {
  BsFacebook,
  BsInstagram,
  BsLinkedin,
  BsTwitter,
  BsGithub,
} from "react-icons/bs";
const Contact = ({ contactRef }) => {
  return (
    <>
      <div ref={contactRef}>
        <Container className="sec-padding">
          <h1 className="sec-header" style={{ color: "#1c3c6b" }}>
            {" "}
            Get In Touch
          </h1>
          <Row>
            <Col xs={0} lg={2}></Col>
            <Col className="text-center" xs={12} lg={8}>
              <p>
                Interested in working together? Let's chat. I’ll buy the coffee.
                <br />
                Or just say hi, my inbox is always open.
              </p>
              <Button className="sayhello" href="mailto:omcar04@gmail.com">
                Say Hello 👋
              </Button>
            </Col>
            <Col xs={0} lg={2}></Col>
          </Row>
        </Container>
        <div
          className="text-center"
          style={{
            backgroundColor: "#183159",
            height: "200px",
            color: "#ffffff",
          }}
        >
          <img src={footerPic} height="100px" alt="OP branding"></img>
          <div className="mb-4">
            <a
              href="https://github.com/omcar04/"
              target="_blank"
              rel="noreferrer"
            >
              <BsGithub className="socials" />
            </a>
            <a
              href="https://twitter.com/omcar_parab"
              target="_blank"
              rel="noreferrer"
            >
              <BsTwitter className="socials" />
            </a>
            <a
              href="https://www.instagram.com/omcar_parab/"
              target="_blank"
              rel="noreferrer"
            >
              <BsInstagram className="socials" />
            </a>
            <a
              href="https://www.facebook.com/omcar04/"
              target="_blank"
              rel="noreferrer"
            >
              <BsFacebook className="socials" />
            </a>
            <a
              href="https://www.linkedin.com/in/omcarparab/"
              target="_blank"
              rel="noreferrer"
            >
              <BsLinkedin className="socials" />
            </a>
          </div>

          <span style={{ fontSize: "12px" }}>
            Designed & Built by Omkar Parab
          </span>
        </div>
      </div>
    </>
  );
};

export default Contact;
