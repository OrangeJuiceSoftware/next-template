import React from 'react';
import { orange } from '@ant-design/colors';
import { Layout, Menu, Icon } from 'antd';
const { Content, Sider } = Layout;

import Footer from './footer';
import Header from './header';

const SIDEBAR_WIDTH = 250;

const PageLayout = ({ children }) => {

  return (
    <Layout style={{ minHeight: '100vh' }}>


      <Sider
        theme={'light'}
        width={SIDEBAR_WIDTH}
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

        <Menu defaultSelectedKeys={['1']} mode="inline">
          <Menu.Item key="1">
            <Icon type="pie-chart" />
            <span>Option 1</span>
          </Menu.Item>
          <Menu.Item key="2">
            <Icon type="desktop" />
            <span>Option 2</span>
          </Menu.Item>
          <Menu.Item key="9">
            <Icon type="file" />
            <span>File</span>
          </Menu.Item>
        </Menu>
      </Sider>


      <Layout style={{ marginLeft: SIDEBAR_WIDTH }}>
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
