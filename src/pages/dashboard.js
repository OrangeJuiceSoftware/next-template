
import React, { useEffect } from 'react';

import { useCollection } from 'react-firebase-hooks/firestore';
import axios from 'axios';

import firebaseInit from '../client-services/firebaseInit';

import withNeedsAuthentication from '~/src/components/hocs/withNeedsAuthentication';

import Head from 'next/head';
import Link from 'next/link';
import dynamic from 'next/dynamic';

import { Layout } from '~/src/components';


const Editor = dynamic(import('~/src/components/dashboard/editor'), {
  ssr: false
});

import { Button, Col, Icon, Menu, Row, Typography } from 'antd';
import { async } from '@firebase/util';
const { SubMenu } = Menu;

console.log('are we in the browser');

console.log(process.browser);


const { auth, firestore } = firebaseInit();

const Dashboard = () => {
  const [value, loading, error] = useCollection(firestore.collectionGroup('directories'));

  if (!loading) {
    const data = value.docs.map((document) => {
      return document.data();
    });


    data.map(async (doc) => {
      if (doc.root) {
        const parent = await doc.root.get();
        // console.log(parent.ref);

        // console.log(parent.data());
      }
    });
    console.log(data);
  }

  const generateSidebarItems = () => {
    return (
      <Menu style={{ borderRight: 'none' }} selectable={false} mode={'inline'}>
        <SubMenu
          key="sub1"
          title={
            <span>
              <Icon type="folder" />
              <span>Navigation One</span>
            </span>
          }
        >
          <Menu.Item key="1">Option 1</Menu.Item>
          <Menu.Item key="2">Option 2</Menu.Item>
          <Menu.Item key="3">Option 3</Menu.Item>
          <Menu.Item key="4">Option 4</Menu.Item>
        </SubMenu>
        <Menu.Item key="12"><Icon type="file-text"/>Option 12</Menu.Item>
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
        <Editor></Editor>
      </Row>
    </Layout>
  );
};

export default withNeedsAuthentication(Dashboard);
