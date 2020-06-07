import React from 'react';
import profile from '../assets/images/profile.jpg';
import aws from '../assets/icons/aws.svg';
import rails from '../assets/icons/rails.svg';
import react from '../assets/icons/react.svg';
import redux from '../assets/icons/redux.svg';
import graphql from '../assets/icons/graphql.svg';
import python from '../assets/icons/python.svg';
import nodejs from '../assets/icons/nodejs.svg';
import htmlCssJs from '../assets/icons/html-css-js.png';
import rest from '../assets/icons/rest.svg';
import postgres from '../assets/icons/postgres.svg';
import dynamo from '../assets/icons/dynamo.svg';
import resume from '../assets/louis-leon-resume.pdf';
import '../styles/About.scss';

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
  </div>
);

const Skill = ({ skill, color, key }) => {
  // const color2 = '#002b36';
  const { icons, label } = skill;
  // Sweet regex to convert hex colors to RGB from:
  // https://stackoverflow.com/questions/5623838/rgb-to-hex-and-hex-to-rgb
  function hexToRgb(hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result
      ? {
          r: parseInt(result[1], 16),
          g: parseInt(result[2], 16),
          b: parseInt(result[3], 16),
        }
      : null;
  }
  const colMap = hexToRgb(color);
  // const arr2 = hexToRgb(color2);
  const { r, g, b } = colMap;
  // Generate color matrix to color the icon based on props
  const colorMatrix = [
    // r1
    (r / 256) * 1,
    0,
    0,
    0,
    0,
    // r2
    0,
    (g / 256) * 1,
    0,
    0,
    0,
    // r3
    0,
    0,
    (b / 256) * 1,
    0,
    0,
    // r4
    0,
    0,
    0,
    1,
    0,
  ];

  return (
    <div className="skill">
      <svg xmlns="http://www.w3.org/2000/svg" style={{ display: 'none' }}>
        <defs>
          <filter id={`${color}`}>
            <feColorMatrix type="matrix" values={colorMatrix.join(' ')} />
          </filter>
        </defs>
      </svg>
      <div className="icon-wrap">
        {icons.map(s => (
          <img
            style={{
              filter: `grayscale(100%) brightness(200%) url(#${color})`,
            }}
            key={s}
            src={s}
            alt={label}
          />
        ))}
      </div>
      <p style={{ color }}>{label}</p>
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
  const colors = [
    '#cb4b16',
    '#dc322f',
    '#d33682',
    '#6c71c4',
    '#268bd2',
    '#2aa198',
    '#859900',
  ];
  // const skillArr = [];
  return (
    <>
      <div className="skills-grid">
        {skillArr.map((s, idx) => (
          <Skill key={s.label} color={colors[idx % colors.length]} skill={s} />
        ))}
      </div>
    </>
  );
};

const Bio = () => (
  <div className="about-me">
    <p>
      Thanks for checking out my portfolio! I'm Louis, a bay area web developer.
      After studying philosophy, logic, and mathematics at the University of
      Texas, I branched out to pursue a new path in software engineering. After
      graduating in 2018, I got hooked on coding and building applications, and
      completed the App Academy coding bootcamp in 2019. I love optimizing and
      refining code and learning new technologies and skills!
    </p>
    <p>
      As one of the first developers at Riva Negotiations, I've been working
      alongside a small team to build our scalable, customer-facing web app from
      the ground up. I enjoy switching between frontend and backend projects and
      working to maintain a healthy codebase.
    </p>
    <p>
      I'm curious, analytical, and driven to refine my coding skills and
      development practices! When I'm not coding, I enjoy playing music, rock
      climbing, hiking, and exploring the bay area on foot or bike.
    </p>
    <img id="profile-photo" src={profile} alt="Louis Leon" />
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
    <div className="light-theme" ref={reference} id="about">
      <Header />
      <Body />
    </div>
  );
}
