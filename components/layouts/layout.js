import React from 'react';

import { Layout } from 'antd';
const { Content, Sider } = Layout;

import Footer from './footer';
import Header from './header';
import Sidebar from './sidebar';

const SIDEBAR_WIDTH = 250;

const PageLayout = ({ children, sidebarItems }) => {
  return (
    <Layout style={{ minHeight: '100vh' }}>

      {sidebarItems && <Sidebar width={SIDEBAR_WIDTH} items={sidebarItems}/>}

      <Layout style={{ marginLeft: sidebarItems ? SIDEBAR_WIDTH : 0 }}>
        <Header/>
        <Content style={{ margin: '0 16px' }}>
          {children}
        </Content>
        <Footer/>
      </Layout>

    </Layout>
  );
};

export default PageLayout;
