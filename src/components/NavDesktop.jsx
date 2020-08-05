import React from 'react';
import withHover from './withHover.jsx';
import '../styles/NavDesktop.scss';

const NavLink = props => {
  const { name, current, scrollTo, ...rest } = props;
  return (
    <div
      className={`hover-item nav-link ${current === name}`}
      onClick={scrollTo(name)}
      id={name === 'home' ? 'nav-home' : ''}
      {...rest}>
      {name.toUpperCase()}
    </div>
  );
};

const HoverNav = withHover(NavLink);

export default function Nav({ scrollTo, current }) {
  return (
    <div id="nav-wrap">
      <HoverNav current={current} name="home" scrollTo={scrollTo} />
      <HoverNav current={current} name="about" scrollTo={scrollTo} />
      <HoverNav current={current} name="projects" scrollTo={scrollTo} />
      <HoverNav current={current} name="contact" scrollTo={scrollTo} />
    </div>
  );
}
