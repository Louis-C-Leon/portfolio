import React from 'react';
import withHover from './withHover.jsx';
import '../styles/Projects.scss';

const ProjectTile = ({ title, project, select, ...rest }) => {
  const inline = { backgroundImage: `url(${project.thumbnail})` };
  const colors = [
    '#cb4b16',
    '#dc322f',
    '#d33682',
    '#6c71c4',
    '#268bd2',
    '#2aa198',
    '#859900',
  ];
  return (
    <div
      style={inline}
      className="project-tile"
      onClick={select(title)}
      {...rest}>
      <div className="darken" />
      <div className="title-wrap">
        <p>{title}</p>
        <p>—</p>
        <p className="date">{project.date}</p>
      </div>
      <div className="overlay">
        <p className="body">{project.blurb}</p>
        <div className="tech-list">
          {project.techList.map((t, idx) => (
            <div
              key={`${title}-${t}`}
              style={{ color: colors[idx % colors.length] }}
              className="tech-item">
              {t}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const HoverTile = withHover(ProjectTile);

const ProjectGrid = ({ projects, select }) => {
  return (
    <div className="project-grid">
      {Object.entries(projects).map(([k, v]) => (
        <HoverTile key={k} title={k} project={v} select={select} />
      ))}
    </div>
  );
};

export default function Projects({ reference, select, projects }) {
  return (
    <div className="dark-theme" id="projects" ref={reference}>
      <h1>Projects</h1>
      <div className="title-underline" />
      <ProjectGrid projects={projects} select={select} />
    </div>
  );
}
