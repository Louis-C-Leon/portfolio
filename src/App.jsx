import React, { useRef, useCallback, useState, useEffect } from 'react';
import About from './About.jsx';
import Projects from './Projects.jsx';
import Canvas from './Canvas.jsx';
import Contact from './Contact.jsx';
import linkedin from './assets/icons/linkedin.svg';
import github from './assets/icons/github.svg';
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
      <div className="title-row">
        <a href="https://www.linkedin.com/in/louis-c-leon/">
          <img src={linkedin} />
        </a>
        <a href="https://github.com/louis-c-leon">
          <img src={github} />
        </a>
      </div>
    </div>
  );
};

const Nav = ({ scrollTo, current }) => {
  return (
    <div id="nav-wrap">
      <div
        id="nav-home"
        onClick={scrollTo('home')}
        className={`nav-link ${current === 'home'}`}>
        Home
      </div>
      <div
        onClick={scrollTo('about')}
        className={`nav-link ${current === 'about'}`}>
        About
      </div>
      <div
        onClick={scrollTo('projects')}
        className={`nav-link ${current === 'projects'}`}>
        Projects
      </div>
      <div
        onClick={scrollTo('contact')}
        className={`nav-link ${current === 'contact'}`}>
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
  const body = useRef(document.querySelector('body'));
  const refs = { home, about, projects, contact };
  const [current, setCurrent] = useState('home');

  useEffect(() => {
    const handleScroll = e => {
      const pos = window.scrollY;
      let curr = 'home';
      if (pos >= about.current.offsetTop) {
        curr = 'about';
      }
      if (pos >= projects.current.offsetTop) {
        curr = 'projects';
      }
      if (pos >= contact.current.offsetTop) {
        curr = 'contact';
      }
      if (curr !== current) setCurrent(curr);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [home, about, projects, contact, setCurrent, current]);

  const disableScroll = useCallback(() => {
    body.current.classList.add('modal-open');
  }, [body.current]);

  const enableScroll = useCallback(() => {
    body.current.classList.remove('modal-open');
  }, [body.current]);

  const scrollTo = useCallback(
    refName => () => {
      console.log(refs[refName].current.offsetTop);
      window.scrollTo(0, refs[refName].current.offsetTop);
    },
    [refs]
  );
  return (
    <>
      <Canvas />
      <Nav scrollTo={scrollTo} current={current} />
      <div id="content-wrap">
        <Splash reference={home} />
        <About reference={about} />
        <Projects
          reference={projects}
          disableScroll={disableScroll}
          enableScroll={enableScroll}
        />
        <Contact reference={contact} />
      </div>
    </>
  );
};
