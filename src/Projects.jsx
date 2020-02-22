import React, { useState, useEffect } from 'react';
import projectDict from './projectData.js';
import Carousel from './Carousel.jsx';
import './styles/Projects.css';

const ProjectModal = ({ projects, select, selected }) => {
  if (!selected) return null;
  const currProject = projects[selected];
  const { gallery, description, url } = currProject;

  return (
    <div className="modal-darken" onClick={select(null)}>
      <div className="modal-body" onClick={e => e.stopPropagation()}>
        <h1>{selected}</h1>

        <Carousel slides={gallery} />
        {description.map(paragraph => (
          <p>{paragraph}</p>
        ))}
        <a href={url}>View Live Site</a>
      </div>
    </div>
  );
};

const ProjectTile = ({ title, project, select }) => {
  const inline = { backgroundImage: `url(${project.thumbnail})` };
  return (
    <div style={inline} className="project-tile" onClick={select(title)}>
      <div className="darken" />
      <div className="title-wrap">
        <p>{title}</p>
      </div>
      <p className="body">{project.blurb}</p>
      <div className="tech-list">
        {project.techList.map(t => (
          <div
            key={`${title}-${t}`}
            style={{ backgroundColor: 'red' }}
            className="tech-item">
            {t}
          </div>
        ))}
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

export default function Projects({ reference, disableScroll, enableScroll }) {
  const [selected, setSelected] = useState(null);
  const select = name => () => {
    if (name) {
      disableScroll();
    } else {
      enableScroll();
    }
    setSelected(name);
  };
  return (
    <div id="projects" ref={reference}>
      <h1>Projects</h1>
      <div className="title-underline" />
      <ProjectGrid projects={projectDict} select={select} />
      <ProjectModal
        projects={projectDict}
        select={select}
        selected={selected}
      />
    </div>
  );
}
