import React from 'react';

const Arrow = ({ start, end }) => {
    return (
        <svg style={{ position: 'absolute', zIndex: '-1' }}>
            <line 
                x1={start.x} y1={start.y} 
                x2={end.x} y2={end.y} 
                style={{ stroke: 'black', strokeWidth: 2 }} 
            />
        </svg>
    );
};

export default Arrow;
