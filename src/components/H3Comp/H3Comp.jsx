import React from 'react';
import './H3Comp.css';

const H3Comp = ({ className, text, style }) => {
  return (
    <h3 className={className} style={style}>
      {text}
    </h3>
  );
};

export default H3Comp;
