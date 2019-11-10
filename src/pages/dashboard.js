
import React, { useEffect } from 'react';
import axios from 'axios';
import firebaseInit from '../client-services/firebaseInit';

import withNeedsAuthentication from '~/src/components/hocs/withNeedsAuthentication';

import Head from 'next/head';
import Link from 'next/link';

import { Layout } from '~/src/components';
import { Button, Menu, Icon } from 'antd';

import { Row, Col, Typography } from 'antd';

const { auth, firestore } = firebaseInit();

const Dashboard = () => {
  const generateSidebarItems = () => {
    return (
      <Menu defaultSelectedKeys={['1']}>
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
