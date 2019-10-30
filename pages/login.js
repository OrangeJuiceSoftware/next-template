import React, { useState, useEffect } from 'react';

import axios from 'axios';
import jsCookies from 'js-cookie';

import Head from 'next/head';
import Link from 'next/link';
import Router, { useRouter } from 'next/router';

import firebaseInit from './_services/firebaseInit';
const firebase = firebaseInit();
const auth = firebase.auth();

import { Layout } from '~/components';
import LoginForm from '~/components/forms/auth/login-form';

const LoginPage = () => {
  const router = useRouter();
  const [errors, setErrors] = useState({});

  useEffect(() => {
    router.prefetch('/');
  });

  const login = async ({ email, password }) => {
    email = 'test@gmail.com';
    password = '12345678';

    try {
      const { user } = await auth.signInWithEmailAndPassword(email, password);
      const idToken = await user.getIdToken();

      // const csrfToken = jsCookies.get('csrfToken');
      // console.log(csrfToken);


      const api = axios.create({
        baseURL: `${process.env.API_URL}/api`,
        timeout: 1000
      });

      const { data } = await api.post('auth/request-token', { idToken });

      console.log(data);

      // send them to the home page
      // Router.push({ pathname: '/' });
    } catch (error) {
      console.log(error);

      // set errors
      // setErrors({
      //   form: 'sfdsf',
      //   email: 'sfdsf'
      //   password: 'sfdsf'
      // })
    }
  };

  return (
    <Layout>
      <Head>
        <title>Login</title>
        <link rel='icon' href='/favicon.ico' importance='low' />
      </Head>

      <LoginForm onSubmit={login} externalErrors={errors}/>

      <Link href={'/signup'}>
        <a>Signup</a>
      </Link>

    </Layout>
  );
};

// LoginPage.getInitialProps = async function({ query }) {
//   // handle redirect if there is a user

//   return {};
// };


export default LoginPage;
