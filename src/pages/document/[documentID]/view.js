import React, { useEffect } from 'react';
import { firestore } from 'services/firebase';
import { useCollection } from 'react-firebase-hooks/firestore';

import { mustBeAuthenticated } from 'middlewares';

import Layout from 'layouts/default-layout';
import { Seo, Link } from 'components';

import { Button, Col, Icon, Menu, Row, Typography } from 'antd';
const { SubMenu } = Menu;

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
      <Seo title={'Document'}/>

      <Row style={{ height: 150 }}>
      </Row>
    </Layout>
  );
};

export default mustBeAuthenticated(ViewerPage);
