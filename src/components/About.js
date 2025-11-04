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
                Hey, I am Omkar — a Software Engineer, and a big fan of building
                things that make the web more fun, useful, and beautiful. My dev
                journey started back in 2014 when I made a website for my
                football (soccer) team. That mix of design and code instantly
                hooked me and I have been chasing that feeling ever since. I
                have worked with companies like Reliance Jio, NBCUniversal, and
                the University of Florida, where I built slick dashboards,
                modernized legacy apps, and even tackled massive datasets to
                predict esports earnings. Lately I have been exploring large
                language models and AI, building tools like meeting assistants
                and fine-tuning mini LLMs to make workflows smarter. Outside the
                screen, I love to draw, paint, and design just about
                anything—jerseys, logos, even pizza apps. I am big on UI/UX and
                love turning ideas into interfaces people actually enjoy using.
                Also, huge sports nerd here. At the end of the day, I am just
                someone who loves solving problems, learning new things and
                crafting cool stuff on the internet. Let’s make the web
                better—one clever feature (and doodle) at a time.
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
                    <b>University of FLorida, Gainesville</b>
                    <br />
                    Master of Science - Computer Science
                    <br />
                    GPA 3.6/4
                  </Card.Text>
                  <Card.Text>
                    <b>
                      Fr. C. Rodrigues Institute of Technology - Mumbai
                      University
                    </b>
                    <br />
                    Bachelor of Engineering - Computer Engineering
                    <br />
                    GPA 8.2/10
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
                    <b>University of Florida</b>
                    <br />
                    Software Developer (Research)
                  </Card.Text>
                  <Card.Text>
                    <b>NBCUniversal - NBC Sports Next</b>
                    <br />
                    Software Engineer Intern
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
