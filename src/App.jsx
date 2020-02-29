import React, { useRef, useCallback, useState, useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';
import NavDesktop from './components/NavDesktop.jsx';
import NavMobile from './components/NavMobile.jsx';
import Canvas from './components/Canvas.jsx';
import Splash from './components/Splash.jsx';
import About from './components/About.jsx';
import ProjectModal from './components/ProjectModal.jsx';
import projectDict from './projectData.js';
import Projects from './components/Projects.jsx';
import Contact from './components/Contact.jsx';
import './styles/reset.css';
import './styles/App.css';
import './styles/MediaRules.css';

export default function App() {
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
        <NavMobile
          scrollTo={scrollTo}
          current={current}
          enableScroll={enableScroll}
          disableScroll={disableScroll}
        />
      ) : (
        <NavDesktop scrollTo={scrollTo} current={current} />
      )}
      <div ref={content} id="content-wrap">
        <Splash reference={home} />
        <About reference={about} />
        <Projects reference={projects} projects={projectDict} select={select} />
        <Contact reference={contact} />
      </div>
    </>
  );
}
