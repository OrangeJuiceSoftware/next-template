import React from 'react';

import { Layout } from 'antd';
const { Sider } = Layout;

import { orange } from '@ant-design/colors';

const Sidebar = ({ width, items }) => {
  return (
    <Sider
      theme={'light'}
      width={width}
      style={{
        overflow: 'auto',
        height: '100vh',
        position: 'fixed',
        left: 0
      }}>

      <div style={{
        height: 32,
        background: orange[5],
        margin: 16
      }}/>

      {items}

    </Sider>
  );
};


export default Sidebar;