import React from 'react';
import Carousel from './Carousel.jsx';
import withHover from './withHover.jsx';
import '../styles/ProjectModal.scss';

const CloseIcon = props => (
  <svg
    height="329pt"
    viewBox="0 0 329.26933 329"
    width="329pt"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <path d="m194.800781 164.769531 128.210938-128.214843c8.34375-8.339844 8.34375-21.824219 0-30.164063-8.339844-8.339844-21.824219-8.339844-30.164063 0l-128.214844 128.214844-128.210937-128.214844c-8.34375-8.339844-21.824219-8.339844-30.164063 0-8.34375 8.339844-8.34375 21.824219 0 30.164063l128.210938 128.214843-128.210938 128.214844c-8.34375 8.339844-8.34375 21.824219 0 30.164063 4.15625 4.160156 9.621094 6.25 15.082032 6.25 5.460937 0 10.921875-2.089844 15.082031-6.25l128.210937-128.214844 128.214844 128.214844c4.160156 4.160156 9.621094 6.25 15.082032 6.25 5.460937 0 10.921874-2.089844 15.082031-6.25 8.34375-8.339844 8.34375-21.824219 0-30.164063zm0 0" />
  </svg>
);

const GithubIcon = () => {
  return (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <title>GitHub icon</title>
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
    </svg>
  );
};

const CloseButton = ({ select, ...rest }) => (
  <CloseIcon
    className="hover-item modal-close"
    alt="close"
    onClick={select(null)}
    {...rest}
  />
);

const GithubLink = ({ href, ...rest }) => (
  <a href={href} className="hover-item" {...rest}>
    <GithubIcon />
  </a>
);
const HoverGithubLink = withHover(GithubLink);

const LiveLink = ({ href, ...rest }) => (
  <a href={href} className="bold-link hover-item" {...rest}>
    View Live Site
  </a>
);
const HoverLiveLink = withHover(LiveLink);

export default function ProjectModal({ projects, select, selected, style }) {
  if (!selected) return null;
  const currProject = projects[selected];
  const { gallery, description, url, github } = currProject;

  return (
    <div className={`modal-darken ${style}`} onClick={select(null)}>
      <div className={`modal-body`} onClick={e => e.stopPropagation()}>
        <CloseButton select={select} />
        <Carousel slides={gallery} />
        {description.map((paragraph, idx) => (
          <p
            key={`mod_par_${idx}`}
            dangerouslySetInnerHTML={{ __html: paragraph }}
          />
        ))}
        <div className="project-links">
          {github ? <HoverGithubLink href={github} /> : null}
          {url ? <HoverLiveLink href={url} /> : null}
        </div>
      </div>
    </div>
  );
}
