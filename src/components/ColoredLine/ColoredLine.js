import React from 'react';
import './ColoredLine.css';

function ColoredLine({ color,marginTop }) {
  return (
    <hr
    style={{
        color: color,
        backgroundColor: color,
        height: 1,
        opacity:0.5,
        width:'632px',
        marginTop:marginTop,
        marginLeft:"-2%"
        
    }}
/>
  )
}

export default ColoredLine