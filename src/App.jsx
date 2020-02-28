import React, { useRef, useCallback, useState, useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';
import About from './About.jsx';
import Projects from './Projects.jsx';
import Canvas from './Canvas.jsx';
import Contact from './Contact.jsx';
import ProjectModal from './ProjectModal.jsx';
import NavTop from './NavTop.jsx';
import projectDict from './projectData.js';
import linkedin from './assets/icons/linkedin.svg';
import github from './assets/icons/github.svg';
import './styles/reset.css';
import './styles/App.css';
import './styles/AppMobile.css';

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
        HOME
      </div>
      <div
        onClick={scrollTo('about')}
        className={`nav-link ${current === 'about'}`}>
        ABOUT
      </div>
      <div
        onClick={scrollTo('projects')}
        className={`nav-link ${current === 'projects'}`}>
        PROJECTS
      </div>
      <div
        onClick={scrollTo('contact')}
        className={`nav-link ${current === 'contact'}`}>
        CONTACT
      </div>
    </div>
  );
};

export default () => {
  const home = useRef(null);
  const about = useRef(null);
  const projects = useRef(null);
  const contact = useRef(null);
  const content = useRef(null);
  const body = useRef(document.querySelector('body'));
  const refs = { home, about, projects, contact };
  const [current, setCurrent] = useState('home');
  const [selectedProject, setSelectedProject] = useState(null);
  const [navScroll, setNavScroll] = useState(false);
  const [modalStyle, setModalStyle] = useState('');

  const hasHover = useMediaQuery({ query: '(any-hover: hover)' });
  const hamburger = useMediaQuery({ query: '(max-width: 475px)' });

  useEffect(() => {
    // if the window is scrolling because it's navigating to a new section,
    // I want to wait until it's done scrolling.
    const modalOpen =
      body && body.current
        ? body.current.classList.contains('modal-open')
        : false;
    console.log(modalOpen);
    const handleScroll = e => {
      if (body.current.classList.contains('modal-open')) return;
      const pos = window.scrollY + 50;
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
    if (!navScroll && !modalOpen) {
      window.addEventListener('scroll', handleScroll);
    }
    return () => window.removeEventListener('scroll', handleScroll);
  }, [
    home,
    about,
    projects,
    contact,
    setCurrent,
    current,
    navScroll,
    body.current,
  ]);

  const disableScroll = useCallback(() => {
    const top = `${window.scrollY}`;
    body.current.classList.add('modal-open');
    content.current.setAttribute('style', `transform: translateY(-${top}px)`);
  }, [body.current, content.current]);

  const enableScroll = useCallback(() => {
    const style = content.current.style.transform;
    const digitEx = /\d{1,}/;
    const scroll = Number(style.match(digitEx)[0]);
    body.current.classList.remove('modal-open');
    content.current.setAttribute('style', `transform: none`);
    window.scrollTo({
      top: scroll,
      behavior: 'auto',
    });
  }, [body.current, content.current]);

  const select = useCallback(
    name => () => {
      if (name) {
        disableScroll();
        setSelectedProject(name);
        setModalStyle('open');
      } else {
        enableScroll();
        setModalStyle('close');
        setTimeout(() => {
          setModalStyle('');
          setSelectedProject(null)();
        }, 300);
      }
    },
    [setSelectedProject, setModalStyle]
  );

  function scrollWithCallback(offset, callback) {
    const onScroll = function() {
      if (window.pageYOffset === offset) {
        window.removeEventListener('scroll', onScroll);
        callback();
      }
    };
    window.addEventListener('scroll', onScroll);
    onScroll();
    window.scrollTo({
      top: offset,
      behavior: 'smooth',
    });
  }

  const scrollTo = useCallback(
    refName => () => {
      setNavScroll(true);
      scrollWithCallback(refs[refName].current.offsetTop, () =>
        setNavScroll(false)
      );
      setCurrent(refName);
    },
    [refs, setCurrent, scrollWithCallback]
  );

  return (
    <>
      {hasHover ? <Canvas /> : null}
      <ProjectModal
        projects={projectDict}
        select={select}
        selected={selectedProject}
        style={modalStyle}
      />
      {hamburger ? (
        <NavTop
          scrollTo={scrollTo}
          current={current}
          enableScroll={enableScroll}
          disableScroll={disableScroll}
        />
      ) : (
        <Nav scrollTo={scrollTo} current={current} />
      )}
      {/* <Nav scrollTo={scrollTo} current={current} /> */}
      <div ref={content} id="content-wrap">
        <Splash reference={home} />
        <About reference={about} />
        <Projects reference={projects} projects={projectDict} select={select} />
        <Contact reference={contact} />
      </div>
    </>
  );
};
