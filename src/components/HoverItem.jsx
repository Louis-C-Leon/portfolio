import React, { useContext } from 'react';
import { AppContext } from '../App.jsx';

const HoverItem = ({ Component, className, ...componentProps }) => {
  const { setHover } = useContext(AppContext);
  return (
    <Component
      onMouseEnter={e => setHover(e.target.getBoundingClientRect())}
      onMouseLeave={() => setHover(null)}
      className={`hover-item ${className || ''}`}
      {...componentProps}
    />
  );
};

export default HoverItem;
