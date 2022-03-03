import React from "react";
import { Container } from "react-bootstrap";
import Slider from "./Slider";

const Projects = ({ projectRef }) => {
  return (
    <>
      <div className="sec-padding blue-bg" ref={projectRef}>
        <Container>
          <h1 className="sec-header">Projects</h1>
          <Slider />
        </Container>
      </div>
    </>
  );
};

export default Projects;
