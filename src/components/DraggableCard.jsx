// src/components/DraggableCard.js
import React from 'react';
import Draggable from 'react-draggable';
import { Card, Button } from 'antd';
import { ResizableBox } from 'react-resizable';
import 'react-resizable/css/styles.css';

const DraggableCard = ({ id, content, onShowMore, onConnect }) => {
    return (
        <Draggable>
            <ResizableBox 
                width={200} 
                height={100} 
                minConstraints={[100, 50]} 
                maxConstraints={[300, 200]}
            >
                <Card 
                    id={`card-${id}`}
                    title={`Card ${id}`}
                    style={{ cursor: 'move', marginBottom: '20px' }}
                    extra={<a onClick={() => onShowMore(content)}>Show More</a>}
                >
                    {content.slice(0, 50)}...
                    <div style={{ marginTop: '10px' }}>
                        <Button 
                            type="primary" 
                            size="small" 
                            onClick={() => onConnect(id)}
                        >
                            Connect with arrow
                        </Button>
                    </div>
                </Card>
            </ResizableBox>
        </Draggable>
    );
};

export default DraggableCard;
