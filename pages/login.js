import React, { useState, useEffect } from 'react';

import Head from 'next/head';
import Link from 'next/link';
import Router, { useRouter } from 'next/router';

import firebaseInit from '../client-services/firebaseInit';
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
    try {
      await auth.signInWithEmailAndPassword(email, password);

      // send them to the home page
      Router.push({ pathname: '/' });
    } catch (error) {
      console.log(error);
      // set errors... this will pass the errors into the form
      // setErrors({
      //   form: 'sfdsf',
      //   email: 'sfdsf',
      //   password: 'sfdsf'
      // });
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

export default LoginPage;
