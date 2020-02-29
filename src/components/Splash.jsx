import React from 'react';
import linkedin from '../assets/icons/linkedin.svg';
import github from '../assets/icons/github.svg';
import '../styles/Splash.css';

export default function Splash({ reference }) {
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
}
