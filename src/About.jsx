import React from 'react';
import profile from './assets/images/profile.jpg';
import aws from './assets/icons/aws.svg';
import rails from './assets/icons/rails.svg';
import react from './assets/icons/react.svg';
import redux from './assets/icons/redux.svg';
import graphql from './assets/icons/graphql.svg';
import python from './assets/icons/python.svg';
import nodejs from './assets/icons/nodejs.svg';
import htmlCssJs from './assets/icons/html-css-js.png';
import rest from './assets/icons/rest.svg';
import postgres from './assets/icons/postgres.svg';
import dynamo from './assets/icons/dynamo.svg';
import resume from './assets/louis-leon-resume.pdf';
import './styles/About.css';

const Header = () => (
  <div className="about-header">
    <h1>About Me</h1>
    <div className="title-underline" />
    <a
      rel="noopener noreferrer"
      target="_blank"
      href={resume}
      className="bold-link">
      Resume
    </a>
    <div className="blurbs">
      <div className="blurb-section">
        <h2>FRONTEND</h2>
        <p>
          I write performant, dynamic frontend code with a focus on user
          experience. I currently use React for UI development, but I'm
          comfortable working on legacy code, learning new frameworks, or using
          vanilla HTML/CSS/JavaScript.
        </p>
      </div>
      <div className="blurb-section">
        <h2>BACKEND</h2>
        <p>
          I've worked with many different server-side technologies and design
          patterns, from MVC frameworks to serverless microservice architecture.
          I currently use Serverless.js with AWS among other tools to design and
          develop fast, scalable applications.
        </p>
      </div>
    </div>
  </div>
);

const Skill = ({ skill }) => {
  const { icons, label } = skill;
  return (
    <div className="skill">
      <div className="icon-wrap">
        {icons.map(s => (
          <img key={s} src={s} alt={label} />
        ))}
      </div>
      <p>{label}</p>
    </div>
  );
};

const Skills = () => {
  const skillArr = [
    { icons: [rails], label: 'Ruby on Rails' },
    { icons: [react, redux], label: 'React and Redux' },
    { icons: [htmlCssJs], label: 'HTML/CSS/JavaScript' },
    { icons: [aws], label: 'Amazon Web Services' },
    { icons: [nodejs], label: 'Node.js' },
    { icons: [python], label: 'Python' },
    { icons: [dynamo, postgres], label: 'SQL and NoSQL databases' },
    { icons: [rest, graphql], label: 'REST and GraphQl APIs' },
  ];
  // const skillArr = [];
  return (
    <div className="skills-grid">
      {skillArr.map(s => (
        <Skill key={s.label} skill={s} />
      ))}
    </div>
  );
};

const Bio = () => (
  <div className="about-me">
    <img id="profile-photo" src={profile} alt="Louis Leon" />
    <p>
      I'm Louis, a bay area web developer. After studying philosophy, logic, and
      mathematics at the University of Texas, I branched out onto a new path to
      pursue software engineering. After graduating in 2018, I got hooked on
      coding and building applications, and completed the App Academy coding
      bootcamp in 2019. I love optimizing and refining code and learning new
      technologies and skills!
    </p>
    <p>
      As one of the first developers at Riva Negotiations, I've been working
      alongside a small team to build our scalable, customer-facing web app from
      the ground up. I'm always switching between frontend and backend work, and
      working to maintain a healthy codebase.
    </p>
    <p>
      I'm curious, analytical, and driven to refine my coding skills and
      development practices! When I'm not coding, I enjoy playing music, rock
      climbing, hiking, and exploring the bay area on foot or bike.
    </p>
  </div>
);

const Body = () => (
  <div className="sections">
    <Bio />
    <Skills />
  </div>
);

export default function About({ reference }) {
  return (
    <div ref={reference} id="about">
      <Header />
      <Body />
    </div>
  );
}
