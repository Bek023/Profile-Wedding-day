import React from 'react';
import { Flex, Spin } from 'antd';
const Loading = () => (
    <div style={{ width: '100vw', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Flex align="center" gap="middle">

            <Spin size="large" />
        </Flex>
    </div>
);
export default Loading;