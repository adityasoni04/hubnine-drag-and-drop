// src/components/DetailModal.js
import React from 'react';
import { Modal } from 'antd';

const DetailModal = ({ visible, content, onClose }) => {
    return (
        <Modal title="Detail" visible={visible} onOk={onClose} onCancel={onClose}>
            <p>{content}</p>
        </Modal>
    );
};

export default DetailModal;
