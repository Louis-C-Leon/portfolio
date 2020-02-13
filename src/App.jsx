import React, { useRef, useCallback, useState } from 'react';
import About from './About.jsx';
import Projects from './Projects.jsx';
import './styles/reset.css';
import './styles/App.css';

const Splash = ({ reference }) => {
  return (
    <div ref={reference} id="splash">
      <div className="title-row">
        <h1>
          Hi, I'm <strong>Louis Leon</strong>
        </h1>
      </div>
      <div className="title-underline" />
      <div className="title-row">
        <h2>Full-Stack Web Developer</h2>
      </div>
    </div>
  );
};

const Nav = ({ scrollTo }) => {
  return (
    <div id="nav-wrap">
      <div onClick={scrollTo('about')} className="nav-link">
        About
      </div>
      <div onClick={scrollTo('projects')} className="nav-link">
        Projects
      </div>
      <div onClick={scrollTo('contact')} className="nav-link">
        Contact
      </div>
    </div>
  );
};

export default () => {
  const home = useRef(null);
  const about = useRef(null);
  const projects = useRef(null);
  const contact = useRef(null);
  const wrapper = useRef(null);
  const [refs, setRefs] = useState({ home, about, projects, contact });
  const scrollTo = useCallback(
    refName => () => {
      console.log(refs[refName].current.offsetTop);
      wrapper.current.scrollTo(0, refs[refName].current.offsetTop);
    },
    [refs]
  );
  return (
    <>
      <Nav scrollTo={scrollTo} />
      <div ref={wrapper} id="content-wrap">
        {/* <Splash reference={home} />
        <About reference={about} /> */}
        <Projects reference={projects} />
      </div>
    </>
  );
};
