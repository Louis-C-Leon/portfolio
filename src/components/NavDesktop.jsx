import React from 'react';
import '../styles/NavDesktop.scss';

export default function Nav({ scrollTo, current }) {
  return (
    <div id="nav-wrap">
      <a
        id="nav-home"
        onClick={scrollTo('home')}
        className={`nav-link ${current === 'home'}`}>
        HOME
      </a>
      <a
        onClick={scrollTo('about')}
        className={`nav-link ${current === 'about'}`}>
        ABOUT
      </a>
      <a
        onClick={scrollTo('projects')}
        className={`nav-link ${current === 'projects'}`}>
        PROJECTS
      </a>
      <a
        onClick={scrollTo('contact')}
        className={`nav-link ${current === 'contact'}`}>
        CONTACT
      </a>
    </div>
  );
}
