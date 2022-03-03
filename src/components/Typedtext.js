import React from "react";
import Typewriter from "typewriter-effect";
import { Container } from "react-bootstrap";
import "./Typedtext.css";

const Typedtext = () => {
  return (
    <>
      <div className="bg">
        <Container>
          <div className="Typedtext">
            <h3>Hello ! I'm Omkar,</h3>

            <h1>
              <Typewriter
                options={{
                  loop: true,
                }}
                onInit={(typewriter) => {
                  typewriter
                    .typeString("WEB DEVELOPER")
                    .pauseFor(1000)
                    .deleteAll()
                    .typeString("SOFTWARE DEVELOPER")

                    .pauseFor(1000)
                    .deleteAll()
                    .typeString("UI/UX ENTHUSIAST")
                    .pauseFor(1000)
                    .deleteAll()
                    .typeString("HOMO SAPIEN SAPIEN")
                    .pauseFor(1000)
                    .deleteAll()
                    .start();
                }}
              />
            </h1>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Typedtext;
