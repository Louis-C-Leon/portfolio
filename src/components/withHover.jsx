import React, { useContext } from 'react';
import { AppContext } from '../App.jsx';

const withHover = Component => props => {
  const { setHover } = useContext(AppContext);
  return (
    <Component
      {...props}
      onMouseEnter={e => {
        e.stopPropagation();
        setHover(e.currentTarget.getBoundingClientRect());
        if (props.onMouseEnter) props.onMouseEnter(e);
      }}
      onMouseLeave={e => {
        setHover(null);
        if (props.onMouseLeave) props.onMouseLeave(e);
      }}
    />
  );
};

export default withHover;
