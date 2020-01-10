import React from 'react';

import { Layout, Row, Col, Menu, Icon } from 'antd';
const { Sider } = Layout;

const Sidebar = ({ width, items, style }) => {
  return (
    <Sider theme={'light'} width={width} style={style}>
      {items}
    </Sider>
  );
};

export default Sidebar;