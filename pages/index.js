import React from 'react';
import axios from 'axios';

import Head from 'next/head';
import Link from 'next/link';

import { Layout } from '~/components';

const Home = ({ data }) => {
  return (
    <Layout>
      <Head>
        <title>Home</title>
        <link rel='icon' href='/favicon.ico' importance='low' />
      </Head>

      <Link href="/?test=hi">
        <a>page-2</a>
      </Link>
    </Layout>
  );
};


Home.getInitialProps = async function({ query }) {
  const { data } = await axios.get(`${process.env.API_URL}/api?test=${query.test}`);

  return {
    data
  };
};

export default Home;
