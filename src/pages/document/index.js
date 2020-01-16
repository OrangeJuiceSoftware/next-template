import React, { useEffect } from 'react';
import { firestore } from 'services/firebase';
import { useCollection } from 'react-firebase-hooks/firestore';

import { mustBeAuthenticated } from 'middlewares';

import Layout from 'layouts/default-layout';
import { Seo, Link } from 'components';

import { Button, Card, Col, Icon, Menu, Row, Typography } from 'antd';
const { SubMenu } = Menu;

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
      <Seo title={'Documents'}/>

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
