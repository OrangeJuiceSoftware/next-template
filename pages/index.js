import React, { useEffect } from 'react';
import axios from 'axios';

import Head from 'next/head';
import Link from 'next/link';

import { Layout } from '~/components';
import { Button } from 'antd';


import firebaseInit from './_services/firebaseInit';
const firebase = firebaseInit();
const firestore = firebase.firestore();
const auth = firebase.auth();

const Home = ({ data }) => {

  useEffect(() => {
    const fetchData = async () => {
      const test = await firestore.collection('spells-aidded').doc('alarm').get();
      // console.log(test.data());
    };

    fetchData();
  }, []);

  useEffect(() => {
    auth.onAuthStateChanged(function(user) {
      if (user) {
        console.log(user);
      } else {
        // show some errors lol
      }
    });
  }, []);

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

Home.getInitialProps = withAxios(async (ctx, { axios }) => {
  let data;
  try {
    const { data } = await axios.get('', { params: { test: 'hi' } });
  } catch (error) {
    console.log(error);
  }

  return {
    data
  };
});

export default Home;
