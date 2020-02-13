import React from 'react';
import profile from './assets/profile.jpg';
import './styles/About.css';

const Header = () => (
  <div className="about-header">
    <h1>About Me</h1>
    <div className="title-underline" />
    <div className="blurbs">
      <div className="blurb-section">
        <h3>Frontend</h3>
        <p>
          I know a lot about about frontend stuff. I know a lot about about
          frontend stuff. I know a lot about about frontend stuff. I know a lot
          about about frontend stuff. I know a lot about about frontend stuff.
        </p>
      </div>
      <div className="blurb-section">
        <h3>Backend</h3>
        <p>
          I know a lot about about frontend stuff. I know a lot about about
          frontend stuff. I know a lot about about frontend stuff. I know a lot
          about about frontend stuff. I know a lot about about frontend stuff.
        </p>
      </div>
    </div>
  </div>
);

const Body = () => (
  <div className="sections">
    <div className="about-me">
      <h2>Background</h2>
      <div className="background">
        <img id="profile-photo" src={profile} alt="Louis Leon" />
        <p>
          Thanks for visiting my portfolio! I'm Louis, a bay area software
          developer. After studying philosophy, logic, and mathematics at the
          University of Texas, I decided to branch off onto a new career path
          and pursue software engineering. Since then, I've grown to love the
          process of designing and building web applications and the
          satisfaction of finding bugs and optimizing code.
          <br />
          As one of the original developers at Riva Negotiations, I've been
          working alongside a small team to build our customer-facing web app
          from the ground up. Our current stack is built on AWS using serverless
          microservice patterns and React on frontend.
          <br />
          I'm curious, analytical, and I'm currently striving to refine my
          coding skills and development practices! When I'm not coding, I enjoy
          playing music, rock climbing, hiking, and exploring the bay area on
          foot or bike.
        </p>
      </div>
    </div>
    <div className="skills-list">
      <h2>Skills</h2>
      <div className="skills-grid">
        <div className="g-i-1">Rails</div>
        <div className="g-i-2">React</div>
        <div className="g-i-3">HTML/CSS/JavaScript</div>
        <div className="g-i-4">Node.js</div>
        <div className="g-i-5">SQL</div>
        <div className="g-i-6">NoSQL</div>
        <div className="g-i-7">AWS</div>
        <div className="g-i-8">Python</div>
      </div>
    </div>
  </div>
);

export default ({ reference }) => {
  return (
    <div ref={reference} id="about">
      <Header />
      <Body />
    </div>
  );
};
