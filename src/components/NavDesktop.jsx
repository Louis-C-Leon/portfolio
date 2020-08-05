import React from 'react';
import HoverItem from './HoverItem.jsx';
import '../styles/NavDesktop.scss';

export default function Nav({ scrollTo, current }) {
  return (
    <div id="nav-wrap">
      <HoverItem
        className={`nav-link ${current === 'home'}`}
        onClick={scrollTo('home')}
        id="nav-home"
        Component={props => <div {...props}>HOME</div>}
      />
      <HoverItem
        className={`nav-link ${current === 'about'}`}
        onClick={scrollTo('about')}
        Component={props => <div {...props}>ABOUT</div>}
      />
      <HoverItem
        className={`nav-link ${current === 'projects'}`}
        onClick={scrollTo('projects')}
        Component={props => <div {...props}>PROJECTS</div>}
      />
      <HoverItem
        className={`nav-link ${current === 'contact'}`}
        onClick={scrollTo('contact')}
        Component={props => <div {...props}>CONTACT</div>}
      />
    </div>
  );
}
