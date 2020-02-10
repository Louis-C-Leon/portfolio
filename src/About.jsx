import React from 'react';
import profile from './assets/profile.jpg';
import './styles/About.css';

const Skills = () => {};

export default ({ reference }) => {
  return (
    <div ref={reference} id="about">
      <div className="about-header">
        <h1>About Me</h1>
        <div className="title-underline" />
        <div className="blurbs">
          <div className="blurb-section">
            <h3>Frontend</h3>
            <p>
              I know a lot about about frontend stuff. I know a lot about about
              frontend stuff. I know a lot about about frontend stuff. I know a
              lot about about frontend stuff. I know a lot about about frontend
              stuff.
            </p>
          </div>
          <div className="blurb-section">
            <h3>Backend</h3>
            <p>
              I know a lot about about frontend stuff. I know a lot about about
              frontend stuff. I know a lot about about frontend stuff. I know a
              lot about about frontend stuff. I know a lot about about frontend
              stuff.
            </p>
          </div>
        </div>
      </div>
      <div className="sections">
        <div className="about-me">
          <h2>Background</h2>
          <img id="profile-photo" src={profile} alt="Louis Leon" />
          <p>
            I'm Louis, a software developer based in San Francisco. After
            completing my studies in philosophy, logic, and mathematics in
            Summer 2018, I decided to branch off onto a new path in life and
            pursue software engineering full-time. I've been fascinated by
            computers since I was a young kid, designing simple games in BASIC
            for my brother and sister. Over the last few years, I fell in love
            with the process of solving coding challenges and designing
            applications, and the satisfaction of finally understanding a bug or
            optimizing questionable code. For over six months now, I've been
            dedicated to learning more about developing web applications and
            about the tech stacks that make their development possible. I'm
            curious, analytical, and I'm currently striving to refine my
            development skills and learn everything I can about the web! When
            I'm not coding, I enjoy playing music, rock climbing, hiking, and
            exploring my new hometown on foot or by bike.
          </p>
        </div>
        <div className="skills-list">
          <h2>Skills</h2>
        </div>
      </div>
    </div>
  );
};
