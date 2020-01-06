import React, { useEffect } from 'react';
import { auth, firestore } from '../services/firebase';

import Head from 'next/head';
import Link from 'next/link';

import { Layout } from '~/src/components';
import { Button } from 'antd';

const AccountSettings = () => {

  return (
    <Layout>
      <Head>
        <title>Home</title>
        <link rel='icon' href='/favicon.ico' importance='low'/>
      </Head>

      <Link href={'/'}>
        <a>oh my pussy hurts</a>
      </Link>
    </Layout>
  );
};

export default AccountSettings;
