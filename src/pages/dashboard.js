import React, { useEffect } from 'react';
import { firestore } from 'services/firebase';

import { useCollection } from 'react-firebase-hooks/firestore';
import { mustBeAuthenticated } from 'middlewares';

import Head from 'next/head';
import Link from 'next/link';

import { Button, Card, Col, Icon, Menu, Row, Typography } from 'antd';

import { Layout } from 'components';

const Dashboard = () => {

  return (
    <Layout>
      <Head>
        <title>Dashboard</title>
        <link rel='icon' href='/favicon.ico' importance='low'/>
      </Head>

      <Row type='flex' justify="space-around" style={{ marginTop: 24 }}>
        <Col span={6}>
          <Card title="Default size card" extra={<a href="#">More</a>} >
            <p>Card content</p>
            <p>Card content</p>
            <p>Card content</p>
          </Card>
        </Col>
        <Col span={10}>
          <Card title="Default size card" extra={<a href="#">More</a>} >
            <p>Card content</p>
            <p>Card content</p>
            <p>Card content</p>
          </Card>
        </Col>
        <Col span={6}>
          <Card title="Default size card" extra={<a href="#">More</a>} >
            <p>Card content</p>
            <p>Card content</p>
            <p>Card content</p>
          </Card>
        </Col>
      </Row>
    </Layout>
  );
};

export default mustBeAuthenticated(Dashboard);
