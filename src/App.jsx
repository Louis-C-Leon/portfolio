import React, {
  createContext,
  useRef,
  useCallback,
  useState,
  useEffect,
} from 'react';
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
import './styles/reset.scss';
import './styles/App.scss';
import './styles/MediaRules.scss';

export const AppContext = createContext();

export function App() {
  // Refs used for smooth scrolling to sections and state used for
  // tracking the active section
  const home = useRef(null);
  const about = useRef(null);
  const projects = useRef(null);
  const contact = useRef(null);
  const content = useRef(null);
  const body = useRef(document.querySelector('body'));
  const sectionRefs = { home, about, projects, contact, body };
  const [current, setCurrent] = useState('home');

  // Is the page currently smooth scrolling?
  const [navScroll, setNavScroll] = useState(false);

  // Sets the current section when user scrolls to a new section
  useEffect(() => {
    // if the window is scrolling because it's navigating to a new section,
    // I want to wait until it's done scrolling.
    const modalOpen =
      body && body.current
        ? body.current.classList.contains('modal-open')
        : false;
    const handleScroll = () => {
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

  // Ref to track which hoverable element, if any, is being hovered over
  const [hover, setHover] = useState(null);
  useEffect(() => {
    const listener = document.addEventListener('click', () => setHover(null));
    return document.removeEventListener('click', listener);
  }, [setHover]);

  // State for managing active project modals
  const [selectedProject, setSelectedProject] = useState(null);
  const [modalStyle, setModalStyle] = useState('');

  // Media queries to conditionally render some components
  const hasHover = useMediaQuery({ query: '(any-hover: hover)' });
  const hamburger = useMediaQuery({ query: '(max-width: 475px)' });

  // Helper FN disables scrolling when project modal is open
  const disableScroll = useCallback(() => {
    const top = `${window.scrollY}`;
    body.current.classList.add('modal-open');
    content.current.setAttribute('style', `transform: translateY(-${top}px)`);
  }, [body.current, content.current]);

  // Helper fn enables scrolling when project modal is closed
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

  // Helper fn to select a project and open the project modal
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

  // Scroll with callback for smooth scrolling to sections
  function scrollWithCallback(offset, callback) {
    const onScroll = function () {
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

  // Smooth scroll to a section
  const scrollTo = useCallback(
    refName => () => {
      setNavScroll(true);
      scrollWithCallback(sectionRefs[refName].current.offsetTop, () =>
        setNavScroll(false)
      );
      setCurrent(refName);
    },
    [sectionRefs, setCurrent, scrollWithCallback]
  );

  return (
    <AppContext.Provider value={{ hover, setHover }}>
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
    </AppContext.Provider>
  );
}
