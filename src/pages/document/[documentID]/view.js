import React, { useEffect } from 'react';
import { firestore } from 'services/firebase';

import { useCollection } from 'react-firebase-hooks/firestore';

import Head from 'next/head';
import Link from 'next/link';
import dynamic from 'next/dynamic';

import { Button, Col, Icon, Menu, Row, Typography } from 'antd';
const { SubMenu } = Menu;

import { Layout } from 'components';

const Editor = dynamic(import('components/editor'), {
  ssr: false
});

import { mustBeAuthenticated } from 'middlewares';

const ViewerPage = () => {
  const [value, loading, error] = useCollection(firestore.collectionGroup('directories'));

  if (!loading && value) {
    const data = value.docs.map((document) => document.data());
    data.map(async (doc) => {
      if (doc.root) {
        const parent = await doc.root.get();
        // console.log(parent.ref);
        // console.log(parent.data());
      }
    });
  }


  return (
    <Layout>
      <Head>
        <title>ViewerPage</title>
        <link rel='icon' href='/favicon.ico' importance='low'/>
      </Head>

      <Row style={{ height: 150 }}>
        <Editor></Editor>
      </Row>
    </Layout>
  );
};

export default mustBeAuthenticated(ViewerPage);
