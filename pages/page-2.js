import React from 'react';
import axios from 'axios';

import Head from 'next/head';
import Link from 'next/link';

import { Layout } from '~/components';

const Home = ({ data }) => {
  return (
    <Layout>
      <Head>
        <title>Page 2</title>
        <link rel='icon' href='/favicon.ico' importance='low' />
      </Head>

      <Link href="/">
        <a>home</a>
      </Link>
    </Layout>
  );
};

Home.getInitialProps = async function() {
  const { data } = await axios.get(`${process.env.API_URL}/api`);
  console.log('page 2');

  return {
  //   data
  };
};

export default Home;
