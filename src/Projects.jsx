import React, { useState, useEffect } from 'react';
import projectDict from './projectData.js';
import './styles/Projects.css';

const ProjectModal = ({ projects, select, selected }) => {
  if (!selected) return null;
  const currProject = projects[selected];
  const [gallery, setGallery] = useState(currProject.gallery);
  const [idx, setIdx] = useState(0);
  const [scrolling, setScrolling] = useState(false);
  const [curr, setCurr] = useState(gallery[idx]);
  const [prev, setPrev] = useState(
    gallery[Math.abs((idx - 1) % gallery.length)]
  );

  const [next, setNext] = useState(gallery[(idx + 1) % gallery.length]);
  const nextImg = () => {
    const cIdx = (idx + 1) % gallery.length;
    const nIdx = (cIdx + 1) % gallery.length;
    const pIdx = idx;
    setIdx(cIdx);
    setCurr(gallery[cIdx]);
    setPrev(gallery[pIdx]);
    setNext(gallery[nIdx]);
  };

  const getNext = () => {
    setScrolling(true);
    setTimeout(() => {
      setScrolling(false);
      nextImg();
    }, 500);
  };
  // useEffect(() => {
  //   if (scrolling) {
  //     setTimeout(() => setScrolling(false), 1000);
  //   }
  // }, [scrolling, setScrolling]);
  console.log(idx);
  const prevStyle = {
    transition: scrolling ? 'transform 0.5s' : 'none',
    transform: scrolling ? 'translateX(-200%)' : 'translateX(-100%)',
  };
  console.log(scrolling);
  return (
    <div className="modal-darken" onClick={select(null)}>
      <div className="modal-body" onClick={e => e.stopPropagation()}>
        <h1>{selected}</h1>

        <div className="carousel">
          <img className="prev" src={prev} style={prevStyle} />
          <img
            className="curr"
            src={curr}
            onClick={getNext}
            style={prevStyle}
          />
          <img className="next" src={next} style={prevStyle} />
        </div>
        <p>{currProject.description}</p>
        <a href={currProject.url}>View Live Site</a>
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

export default ({ reference }) => {
  const [selected, setSelected] = useState(null);
  const select = name => () => setSelected(name);
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
};
