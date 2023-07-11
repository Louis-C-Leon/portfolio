import React from 'react';
import withHover from './withHover.jsx';
import profile from '../assets/images/profile.jpg';
import typescript from '../assets/icons/typescript.svg';
import express from '../assets/icons/expressjs.svg';
import aws from '../assets/icons/aws.svg';
import rails from '../assets/icons/rails.svg';
import react from '../assets/icons/react.svg';
import graphql from '../assets/icons/graphql.svg';
import nest from '../assets/icons/NestJS.svg';
import nodejs from '../assets/icons/nodejs.svg';
import htmlCssJs from '../assets/icons/html-css-js.png';
import rest from '../assets/icons/rest.png';
import postgres from '../assets/icons/postgres.svg';
import dynamo from '../assets/icons/dynamo.svg';
import resume from '../assets/louis-leon-resume.pdf';
import '../styles/About.scss';

const ResumeLink = props => (
  <a
    className="hover-item bold-link"
    rel="noopener noreferrer"
    target="_blank"
    href={resume}
    {...props}
  >
    PDF Resume
  </a>
);
const HoverResumeLink = withHover(ResumeLink);

const Header = () => (
  <div className="about-header">
    <h1>About Me</h1>
    <div className="title-underline" />
    <HoverResumeLink />
  </div>
);

const Skill = ({ skill, color }) => {
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
      <svg
        in="SourceGraphic"
        onLoad={() => console.log(color, 'filter loaded')}
        style={{ height: 0, width: 0 }}
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <filter id={`${color.slice(1)}`}>
            <feColorMatrix type="matrix" values={colorMatrix.join(' ')} />
          </filter>
        </defs>
      </svg>
      <div className="icon-wrap">
        {icons.map((s, idx) => (
          <div className="layered-icon" key={`icon_${idx}`}>
            <img
              className="monochrome-icon"
              style={{
                filter: `grayscale(100%) brightness(200%) url(#${color.slice(
                  1
                )})`,
              }}
              src={s}
              alt={label}
            />
            <img className="color-icon" src={s} alt={label} />
          </div>
        ))}
      </div>
      <p style={{ color }}>{label}</p>
    </div>
  );
};

const Skills = () => {
  const skillArr = [
    { icons: [typescript], label: 'TypeScript' },
    { icons: [react], label: 'React' },
    { icons: [htmlCssJs], label: 'HTML/CSS/JavaScript' },
    { icons: [aws], label: 'Amazon Web Services (AWS)' },
    { icons: [nodejs], label: 'Node.js' },
    { icons: [express], label: 'Express.js' },
    { icons: [nest], label: 'NestJS' },
    { icons: [dynamo, postgres], label: 'SQL and NoSQL databases' },
    { icons: [rest, graphql], label: 'REST and GraphQl API development' },
    { icons: [rails], label: 'Ruby on Rails' },
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
    <img id="profile-photo" src={profile} alt="Louis Leon" />
    <p>
      Thanks for checking out my portfolio site! I'm a bay area full-stack
      developer with four years of experience building products with fast-paced
      startups. I'm currently a TypeScript/JavaScript developer with a focus on
      the frontend and expertise in React. I also have experience building REST
      and GraphQL APIs and microservices using frameworks like Express.js,
      Nest.js, and Serverless. I have worked with multiple relational and
      non-relational databases (e.g. MySQL & PostgreSQL, MongoDB, DynamoDB), and
      I've designed data models and schema from product requirements. I also
      have some experience deploying servers and cloud infrastructure on AWS.
      While I'm most experienced with TypeScript/JavaScript, I'm also familiar
      with Python, Ruby, and Java, and I love learning new languages and
      libraries! I believe in collaboration and sharing expertise, so I strive
      to participate in code review, writing documentation, and pair
      programming.
    </p>
    <p>
      At Robin Healthcare, I worked across multiple teams as we migrated our
      business to the next version of our medical scribing app. I was the main
      product developer on many features that significantly increase the
      efficiency and value of our service. These included clinical note
      templates, site-wide hotkeys, contextual form suggestions, and managing
      2FA logins for scribes. I also contributed to building our internal
      GraphQL API serving 10+ apps and services, adding documentation and tests
      as well as new functionality.
    </p>
    <p>
      I'm a curious, analytical thinker, and I'm always motivated to refine my
      coding skills and development practices. When I'm not coding, I enjoy
      playing music, rock climbing, hiking, and exploring the bay area on foot
      or bike.
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
    <div className="light-theme" ref={reference} id="about">
      <Header />
      <Body />
    </div>
  );
}
