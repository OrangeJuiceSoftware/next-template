import React, { useEffect } from 'react';
import { firestore } from 'services/firebase';

import { useCollection } from 'react-firebase-hooks/firestore';
import { mustBeAuthenticated } from 'middlewares';

import Head from 'next/head';
import Link from 'next/link';

import { Button, Card, Col, Icon, Menu, Row, Typography } from 'antd';
const { SubMenu } = Menu;

import { Layout } from 'components';

const Document = () => {
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
        <title>Dashboard</title>
        <link rel='icon' href='/favicon.ico' importance='low'/>
      </Head>

      <Row>
        <Col span={8}>
          <Card title="Default size card" extra={<a href="#">More</a>} style={{ width: 300 }}>
            <p>Card content</p>
            <p>Card content</p>
            <p>Card content</p>
          </Card>
        </Col>
        <Col span={8}>col-8</Col>
        <Col span={8}>col-8</Col>
      </Row>
    </Layout>
  );
};

export default mustBeAuthenticated(Document);
