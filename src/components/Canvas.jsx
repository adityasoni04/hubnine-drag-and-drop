import React from 'react';

const Canvas = ({ children }) => {
    return (
        <div style={{ 
            width: '100%', 
            height: '100vh', 
            overflow: 'auto', 
            position: 'relative', 
            backgroundColor: '#f0f2f5', 
            padding: '20px',
            border: '1px solid #d9d9d9',
            borderRadius: '4px',
        }}>
            {children}
        </div>
    );
};

export default Canvas;
