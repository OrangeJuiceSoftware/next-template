import React, { useEffect } from 'react';
import { firestore } from 'services/firebase';

import { useCollection } from 'react-firebase-hooks/firestore';
import { mustBeAuthenticated } from 'middlewares';

import Layout from 'layouts/default-layout';
import { Link, Seo } from 'components';

import { Button, Card, Col, Icon, Menu, Row, Typography } from 'antd';

const Dashboard = () => {
  return (
    <Layout>
      <Seo title={'Dashboard'}/>

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
