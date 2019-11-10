
import React, { useEffect } from 'react';
import axios from 'axios';
import firebaseInit from '../client-services/firebaseInit';

import withNeedsAuthentication from '~/src/components/hocs/withNeedsAuthentication';

import Head from 'next/head';
import Link from 'next/link';

import { Layout } from '~/src/components';
import { Button, Col, Icon, Menu, Row, Typography } from 'antd';
const { SubMenu } = Menu;


const { auth, firestore } = firebaseInit();

const Dashboard = () => {
  const generateSidebarItems = () => {
    return (
      <Menu style={{ borderRight: 'none' }} selectable={false} mode={'inline'}>
        <SubMenu
          key="sub1"
          title={
            <span>
              <Icon type="mail" />
              <span>Navigation One</span>
            </span>
          }
        >
          <Menu.Item key="1">Option 1</Menu.Item>
          <Menu.Item key="2">Option 2</Menu.Item>
          <Menu.Item key="3">Option 3</Menu.Item>
          <Menu.Item key="4">Option 4</Menu.Item>
        </SubMenu>
        <SubMenu
          key="sub2"
          title={
            <span>
              <Icon type="appstore" />
              <span>Navigation Two</span>
            </span>
          }
        >
          <Menu.Item key="5">Option 5</Menu.Item>
          <Menu.Item key="6">Option 6</Menu.Item>
          <SubMenu key="sub3" title="Submenu">
            <Menu.Item key="7">Option 7</Menu.Item>
            <Menu.Item key="8">Option 8</Menu.Item>
          </SubMenu>
        </SubMenu>
        <SubMenu
          key="sub4"
          title={
            <span>
              <Icon type="setting" />
              <span>Navigation Three</span>
            </span>
          }
        >
          <Menu.Item key="9">Option 9</Menu.Item>
          <Menu.Item key="10">Option 10</Menu.Item>
          <Menu.Item key="11">Option 11</Menu.Item>
          <Menu.Item key="12">Option 12</Menu.Item>
        </SubMenu>
      </Menu>

    );
  };

  return (
    <Layout sidebarItems={generateSidebarItems()}>
      <Head>
        <title>Dashboard</title>
        <link rel='icon' href='/favicon.ico' importance='low'/>
      </Head>

      <Row style={{ height: 150 }}>
        <Link href={'/'}>
          <a>THIS IS THE MOTHERFUCKING DASHBOARD YOU BITCH</a>
        </Link>
      </Row>
    </Layout>
  );
};

export default withNeedsAuthentication(Dashboard);
