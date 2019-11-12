import React from 'react';

import { Layout, Row, Col, Menu, Icon } from 'antd';
const { Sider } = Layout;

const Sidebar = ({ width, items, style }) => {
  const _style = {
    borderTopRightRadius: 30,
    borderBottomRightRadius: 30,
    ...style
  };

  return (
    <Sider theme={'light'} width={width} style={ _style }>
      {items}
    </Sider>
  );
};


export default Sidebar;