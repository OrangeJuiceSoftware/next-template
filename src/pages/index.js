import React from 'react';

import Head from 'next/head';
import Link from 'next/link';

import { Layout } from '~/src/components';
import { Button } from 'antd';

const LandingPage = () => {
  return (
    <Layout>
      <Head>
        <title>Home</title>
        <link rel='icon' href='/favicon.ico' importance='low'/>
      </Head>

      <Link href={'/'}>
        <a>home</a>
      </Link>
    </Layout>
  );
};

export default LandingPage;
