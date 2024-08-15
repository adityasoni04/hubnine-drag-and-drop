import { useState } from 'react';

export const useCards = () => {
    const [cards, setCards] = useState([]);
    const [connections, setConnections] = useState([]); 
    
    const addCard = () => {
        const id = cards.length + 1;
        setCards([...cards, { id, content: `This is a dummy text for card ${id}. Add more text here to see full content.` }]);
    };

    const addConnection = (startId, endId) => {
        setConnections([...connections, { start: `card-${startId}`, end: `card-${endId}` }]);
    };

    return { cards, connections, addCard, addConnection };
};
