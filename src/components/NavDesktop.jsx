import React from 'react';
import '../styles/NavDesktop.css';

export default function Nav({ scrollTo, current }) {
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
}
