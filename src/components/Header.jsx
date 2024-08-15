import React from 'react';
import { Button, Layout, Typography } from 'antd';
import { PlusOutlined } from '@ant-design/icons';

const { Header: AntHeader } = Layout;
const { Title } = Typography;

const Header = ({ onAddCard }) => {
    return (
        <AntHeader style={{ background: 'rgb(182, 224, 248)', padding: '0 20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: "100%" }}>
            <Title level={3} style={{ margin: 0 }}>
                Welcome to the Drag & Drop App
            </Title>
            <Button 
                type="primary" 
                icon={<PlusOutlined />} 
                onClick={onAddCard}
                style={{ fontSize: '16px', fontWeight: 'bold', padding: '10px 30px' }}
            >
                Add Card
            </Button>
        </AntHeader>
    );
};

export default Header;
