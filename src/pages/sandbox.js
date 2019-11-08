// this is going to be the landing page

import React, { useEffect } from 'react';
import axios from 'axios';

import Head from 'next/head';
import Link from 'next/link';

import { Layout } from '~/src/components';
import { Button } from 'antd';


import firebaseInit from '../client-services/firebaseInit';
const { auth, firestore } = firebaseInit();

import { useCollection } from 'react-firebase-hooks/firestore';

const Sandbox = ({ data, user }) => {
  console.log('data from get intial props');
  console.log(data);

  console.log('user Object');
  console.log(user);

  const [snapshot, loading, error] = useCollection(firestore.collection('spells-aidded').doc('alarm'));

  if(snapshot) {
    console.log('data from firestore hook');
    console.log(snapshot.data());
  }

  return (
    <Layout>
      <Head>
        <title>Sandbox</title>
        <link rel='icon' href='/favicon.ico' importance='low'/>
      </Head>

      <Link href={'/'}>
        <a>Sandbox</a>
      </Link>
    </Layout>
  );
};


// is this a trash way to do this?
const withAxios = (handler) => {
  const dependencies = {};

  return (ctx) => {
    dependencies.axios = axios.create({
      baseURL: `${process.env.API_URL}/api`,
      timeout: 1000,
      headers:  {
        cookie: ctx.req && ctx.req.headers.cookie ? ctx.req.headers.cookie : ''
      }
    });

    return handler(ctx, dependencies);
  };
};

Sandbox.getInitialProps = withAxios(async (ctx, { axios }) => {
  let data;
  try {
    const { data } = await axios.get('', { params: { test: 'hi' } });
    console.log('dkfjdskjfkjsdanfakjsdn');

    console.log(data);

    return { data };
  } catch (error) {
    console.log(error);
  }

  return {
    data
  };
});

export default Sandbox;
