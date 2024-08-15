import React, { useState } from 'react';
import Xarrow from 'react-xarrows';
import { useCards } from './hooks/useCards';
import Canvas from './components/Canvas';
import DraggableCard from './components/DraggableCard';
import DetailModal from './components/DetailModal';
import { Modal, Select } from 'antd';
import Header from './components/Header';

const App = () => {
    const { cards, connections, addCard, addConnection } = useCards();
    const [modalVisible, setModalVisible] = useState(false);
    const [modalContent, setModalContent] = useState('');
    const [connectVisible, setConnectVisible] = useState(false);
    const [startCard, setStartCard] = useState(null);
    const [endCard, setEndCard] = useState(null);

    const handleShowMore = (content) => {
        setModalContent(content);
        setModalVisible(true);
    };

    const closeModal = () => {
        setModalVisible(false);
        setModalContent('');
    };

    const handleConnect = (cardId) => {
        setStartCard(cardId);
        setConnectVisible(true);
    };

    const handleEndConnectChange = (value) => {
        setEndCard(value);
    };

    const handleEndConnect = () => {
        if (startCard && endCard) {
            addConnection(startCard, endCard);
            setConnectVisible(false); // Close the modal after connection is added
            setStartCard(null);
            setEndCard(null);
        }
    };

    return (
        <div style={{ padding: '20px' }}>
            <Header onAddCard={addCard} />
            <Canvas>
                {cards.map(card => (
                    <DraggableCard 
                        key={card.id} 
                        id={card.id} 
                        content={card.content} 
                        onShowMore={handleShowMore} 
                        onConnect={handleConnect} 
                    />
                ))}

                {connections.map((connection, index) => (
                    <Xarrow 
                        key={index}
                        start={connection.start} 
                        end={connection.end} 
                        color="black" 
                        strokeWidth={2} 
                    />
                ))}
            </Canvas>
            <DetailModal 
                visible={modalVisible} 
                content={modalContent} 
                onClose={closeModal} 
            />

            <Modal
                title="Connect to another card"
                visible={connectVisible}
                onCancel={() => setConnectVisible(false)}
                onOk={handleEndConnect}
                okText="Connect"
                cancelText="Cancel"
            >
                <Select 
                    style={{ width: '100%' }} 
                    placeholder="Select a card to connect" 
                    onChange={handleEndConnectChange}
                    value={endCard}
                >
                    {cards.filter(c => c.id !== startCard).map(card => (
                        <Select.Option key={card.id} value={card.id}>
                            Card {card.id}
                        </Select.Option>
                    ))}
                </Select>
            </Modal>
        </div>
    );
};

export default App;
