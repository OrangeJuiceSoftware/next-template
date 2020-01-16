import React from 'react';

import Layout from 'layouts/default-layout';
import { Seo, Link } from 'components';

import { Button } from 'antd';

const LandingPage = () => {
  return (
    <Layout>
      <Seo title={'Blueprints'}/>
      <Link href={'/'}>home</Link>
    </Layout>
  );
};

export default LandingPage;
