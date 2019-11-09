import React from 'react';

import { Layout } from 'antd';
const { Content } = Layout;
import Sidebar from './sidebar';

const SIDEBAR_WIDTH = 250;

const PageLayout = ({ children, sidebarItems }) => {
  return (
    <Layout>
      {sidebarItems && <Sidebar width={SIDEBAR_WIDTH} items={sidebarItems} style={{
        overflow: 'auto',
        height: 'calc(100vh - 64px)'
      }}/>}

      <Layout style={{ overflow: 'auto', height: 'calc(100vh - 64px)' }}>
        <Content style={{ margin: '0 16px' }}>
          {children}
        </Content>
      </Layout>
    </Layout>
  );
};

export default PageLayout;
