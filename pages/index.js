// this is going to be the landing page
import React from 'react';

import Head from 'next/head';
import Link from 'next/link';

import { Layout } from '~/components';
import { Button } from 'antd';

const Home = () => {
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

export default Home;
