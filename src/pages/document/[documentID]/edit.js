import React, { useEffect } from 'react';
import dynamic from 'next/dynamic';
import { firestore } from 'services/firebase';
import { useCollection } from 'react-firebase-hooks/firestore';


import Layout from 'layouts/default-layout';
import { Seo, Link } from 'components';


import { Button, Col, Icon, Menu, Row, Typography } from 'antd';
const { SubMenu } = Menu;


const Editor = dynamic(import('components/editor'), {
  ssr: false
});

import { mustBeAuthenticated } from 'middlewares';

const EditorPage = () => {
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
      <Seo title={'Editor'}/>

      <Row style={{ height: 150 }}>
        <Editor></Editor>
      </Row>
    </Layout>
  );
};

export default mustBeAuthenticated(EditorPage);
