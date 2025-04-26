import React, { useState } from 'react';
import {
  AppstoreOutlined,
  ContainerOutlined,
  DesktopOutlined,
  MailOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  PieChartOutlined,
} from '@ant-design/icons';
import {  Menu } from 'antd';
const items = [
  { key: '1', icon: <PieChartOutlined />, label: 'Profile' },

  {
    key: 'sub1',
    label: 'Wedding Day',
    icon: <MailOutlined />,
    children: [
      { key: '2', label: 'Main' },
      { key: '3', label: 'About the bride and groom' },
      { key: '4', label: 'Love story' },
      { key: '5', label: 'gallery' },
      { key: '6', label: 'Meals' },
      { key: '7', label: 'Company' },
    ],
  },

];
const Sidebar = () => {

  return (
    <div style={{ width: "15%", height: "100vh" }}>
      <Menu
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode="inline"
        theme="dark"
        items={items}
        style={{ height: '100%', borderRight: 0 }}
      />
    </div>
  );
};
export default Sidebar;