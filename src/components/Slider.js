import React from "react";
import { Carousel, Col, Row } from "react-bootstrap";
import slides from "../images/ProClientPanel.png";
import chatApp from "../images/ProChatApp.png";
import walk from "../images/Pro3DW.png";
import videoApp from "../images/ProVideoApp.png";
import workX from "../images/ProWorkX.png";
import more from "../images/more.png";
function Slider(props) {
  return (
    <>
      <Row>
        <Col xs={0} lg={2}></Col>
        <Col xs={12} lg={8}>
          <Carousel className="slider-col">
            <Carousel.Item>
              <img
                className="d-block w-100 slide-img"
                src={chatApp}
                alt="Third slide"
              />
              <Carousel.Caption className="mt-2">
                <h2>Chat Application</h2>
                <p>
                  Messaging app similar to Whatsapp with ReactJS and Socket.io
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 slide-img"
                src={videoApp}
                alt="Second slide"
              />
              <Carousel.Caption className="mt-2">
                <h2>Video Call Application</h2>
                <p>Video Chat Application using ReactJS and WebRTC</p>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <img
                className="d-block w-100 slide-img"
                src={walk}
                alt="Forth slide"
              />
              <Carousel.Caption className="mt-2">
                <h2>3D Walkthrough</h2>
                <p>
                  Three-dimensional walkthrough for Real Estate using Unity game
                  engine.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 slide-img"
                src={slides}
                alt="First slide"
              />
              <Carousel.Caption className="mt-2">
                <h2>Client Panel</h2>
                <p>
                  Client Finance Management tool built on ReactJS, Redux and
                  Firebase.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 slide-img"
                src={workX}
                alt="Fifth slide"
              />
              <Carousel.Caption className="mt-2">
                <h2>Work X</h2>
                <p>Web Application for Rural Employment using Laravel</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 slide-img"
                src={more}
                alt="Forth slide"
              />
              <Carousel.Caption className="mt-2">
                <h2>And Much More . . .</h2>
                <p></p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Col>
        <Col xs={0} lg={2}></Col>
      </Row>
    </>
  );
}

export default Slider;
