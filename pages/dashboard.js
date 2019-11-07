// this is going to be the landing page

import React, { useEffect } from 'react';
import axios from 'axios';

import Head from 'next/head';
import Link from 'next/link';

import { Layout } from '~/components';
import { Button, Menu, Icon } from 'antd';

import firebaseInit from '../client-services/firebaseInit';
const firebase = firebaseInit();
const firestore = firebase.firestore();

const Dashboard = () => {
  const generateSidebarItems = () => {
    return (
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
    );
  };

  return (
    <Layout sidebarItems={generateSidebarItems()}>
      <Head>
        <title>Dashboard</title>
        <link rel='icon' href='/favicon.ico' importance='low'/>
      </Head>

      <Link href={'/'}>
        <a>THIS IS THE MOTHERFUCKING DASHBOARD YOU BITCH</a>
      </Link>
    </Layout>
  );
};

export default Dashboard;
