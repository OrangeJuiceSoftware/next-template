import React from 'react';

import { Layout, Row, Col, Menu, Icon } from 'antd';
const { Sider } = Layout;

const Sidebar = ({ width, renderItems, style }) => {
  return (
    <Sider theme={'light'} width={width} style={style}>
      {renderItems()}
    </Sider>
  );
};

export default Sidebar;