import React from "react";
import { Container, Card, Row, Col } from "react-bootstrap";
import "./Typedtext.css";
import {
  SiHtml5,
  SiBootstrap,
  SiCss3,
  SiJavascript,
  SiReact,
  SiPython,
  SiAdobexd,
  SiUnity,
} from "react-icons/si";
// import ProgressBar from "react-bootstrap/ProgressBar";

import pic from "../images/site-pic.png";

const About = ({ aboutRef }) => {
  return (
    <>
      <div className="sec-padding" ref={aboutRef}>
        <Container>
          <h1 className=" sec-header" style={{ color: "#1c3c6b" }}>
            About Me
          </h1>
          <Row className="mb-5">
            <Col xs={0} lg={2}></Col>
            <Col xs={12} lg={4}>
              <p>
                Hello, my name is Omkar. I'm a Software Engineer based in
                Gainesville, Florida. I enjoy building things that exist over
                the internet. I develop web apps that are simple to use while
                still providing excellent digital experiences. My interest in
                web development began in 2014, and both I and technology have
                progressed significantly since then. I also enjoy drawing,
                painting, and creating designs. My passion for drawing and
                designing spurred me towards UI/UX design. I'm interested in
                crafting user-centric digital experiences that are tailored to
                the needs of the customer. On this path, I'm fairly confident,
                naturally curious, and constantly working to better my talents.
                With each piece of code I write, I aspire to make the web a more
                beautiful place.
              </p>
            </Col>
            <Col xs={12} lg={4}>
              <img src={pic} width="350" alt="My bit-pic" />
            </Col>
            <Col xs={0} lg={2}></Col>
          </Row>

          <Row>
            <Col xs={12} lg={4}>
              <Card className="mb-3">
                <Card.Body>
                  <Card.Text>
                    {/* <GiGraduateCap className="icons" /> */}
                    EDUCATION <hr></hr>
                  </Card.Text>
                  <Card.Text>
                    <b>University of FLorida, Gainesville*</b>
                    <br />
                    Master of Science - Computer Science
                    <br />
                    GPA
                  </Card.Text>
                  <Card.Text>
                    <b>
                      Fr. C. Rodrigues Institute of Technology - Mumbai
                      University
                    </b>
                    <br />
                    Bachelor of Engineering - Computer Engineering
                    <br />
                    GPA 8.19/10
                  </Card.Text>

                  <Card.Text>
                    <b>Fr. Agnels Multipurpose Jr College</b>
                    <br />
                    Higher Secondary Certificate
                    <br />
                    Percentage 81.69
                    <br />
                    Secondary School Certificate
                    <br />
                    Percentage 90.69
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={12} lg={4}>
              <Card className="mb-3">
                <Card.Body>
                  <Card.Text>
                    {/* <GiSuitcase className="icons" /> */}EXPERIENCE<hr></hr>
                  </Card.Text>
                  <Card.Text>
                    <b>Jio Platforms Limited</b>
                    <br />
                    Software Development Engineer
                  </Card.Text>
                  <Card.Text>
                    <b>Piramal Realty</b>
                    <br />
                    Project Intern
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={12} lg={4}>
              <Card className="mb-3">
                <Card.Body>
                  <Card.Text>
                    {/* <GiLaptop className="icons" />{" "} */}TECH/TOOL STACK
                    <hr></hr>
                  </Card.Text>

                  <Card.Text>
                    <SiHtml5 className="tech" />
                    HTML 5{/* <ProgressBar now={90} /> */}
                  </Card.Text>
                  <Card.Text>
                    <SiCss3 className="tech" />
                    CSS 3{/* <ProgressBar now={70} /> */}
                  </Card.Text>

                  <Card.Text>
                    <SiBootstrap className="tech" />
                    Bootstrap 5{/* <ProgressBar now={95} /> */}
                  </Card.Text>

                  <Card.Text>
                    <SiJavascript className="tech" />
                    Javascript{/* <ProgressBar now={70} /> */}
                  </Card.Text>

                  <Card.Text>
                    <SiReact className="tech" />
                    React
                    {/* <ProgressBar now={70} /> */}
                  </Card.Text>

                  <Card.Text>
                    <SiPython className="tech" />
                    Python
                    {/* <ProgressBar now={80} /> */}
                  </Card.Text>
                  <Card.Text>
                    <SiUnity className="tech" />
                    Unity
                    {/* <ProgressBar now={80} /> */}
                  </Card.Text>
                  <Card.Text>
                    <SiAdobexd className="tech" />
                    Adobe XD
                    {/* <ProgressBar now={80} /> */}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default About;
