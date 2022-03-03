import "./App.css";
import Navigation from "./components/Navigation";
import Typedtext from "./components/Typedtext";
import Projects from "./components/Projects";
import About from "./components/About";
import Contact from "./components/Contact";
import { useRef, useState } from "react";

function App() {
  const projectRef = useRef(null);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);

  const [expanded, setExpanded] = useState(false);

  const executeScroll = () => {
    projectRef.current.scrollIntoView({ behavior: "smooth" });
    setExpanded(false);
  };
  const executeAboutScroll = () => {
    aboutRef.current.scrollIntoView({ behavior: "smooth" });
    setExpanded(false);
  };
  const executeContactScroll = () => {
    contactRef.current.scrollIntoView({ behavior: "smooth" });
    setExpanded(false);
  };

  const executeHomeScroll = () => {
    window.scrollTo(0, 0);
    setExpanded(false);
  };
  return (
    <>
      <Navigation
        executeScroll={executeScroll}
        executeAboutScroll={executeAboutScroll}
        executeContactScroll={executeContactScroll}
        executeHomeScroll={executeHomeScroll}
        expanded={expanded}
        setExpanded={setExpanded}
      />
      <Typedtext />
      <About aboutRef={aboutRef} />
      <Projects projectRef={projectRef} />

      <Contact contactRef={contactRef} />
    </>
  );
}

export default App;
