import React from 'react';
import './styles/Projects.css';

const ProjectTile = ({ title, project, select }) => {
  const inline = { backgroundImage: `url(${project.thumbnail})` };
  return (
    <div style={inline} className="project-tile" onClick={select(title)}>
      <div className="darken" />
      <div className="title-wrap">
        <p>{title}</p>
        <p>—</p>
        <p className="date">{project.date}</p>
      </div>
      <div className="overlay">
        <p className="body">{project.blurb}</p>
        <div className="tech-list">
          {project.techList.map(t => (
            <div key={`${title}-${t}`} className="tech-item">
              {t}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const ProjectGrid = ({ projects, select }) => {
  return (
    <div className="project-grid">
      {Object.entries(projects).map(([k, v]) => (
        <ProjectTile key={k} title={k} project={v} select={select} />
      ))}
    </div>
  );
};

export default function Projects({ reference, select, projects }) {
  return (
    <div id="projects" ref={reference}>
      <h1>Projects</h1>
      <div className="title-underline" />
      <ProjectGrid projects={projects} select={select} />
    </div>
  );
}
