import React from 'react';

import { Layout } from 'antd';
const { Content } = Layout;
import Sidebar from './sidebar';

const SIDEBAR_WIDTH = 250;

const PageLayout = ({ children, renderSidebarItems }) => {
  return (
    <Layout>
      {renderSidebarItems && <Sidebar width={SIDEBAR_WIDTH} renderItems={renderSidebarItems} style={{
        overflow: 'auto',
        height: 'calc(100vh - 64px)'
      }}/>}

      <Layout style={{ overflow: 'auto', height: 'calc(100vh - 64px)' }}>
        <Content style={{ margin: '0' }}>
          {children}
        </Content>
      </Layout>
    </Layout>
  );
};

export default PageLayout;
