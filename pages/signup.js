import React, { useState, useEffect } from 'react';

import Head from 'next/head';
import Link from 'next/link';
import Router, { useRouter } from 'next/router';

import firebaseInit from '../client-services/firebaseInit';
const firebase = firebaseInit();
const auth = firebase.auth();

import { Row, Col, Typography } from 'antd';
const { Title } = Typography;

import { Layout } from '~/components';
import LoginForm from '~/components/forms/auth/login-form';

const SignUpPage = () => {
  const router = useRouter();
  const [errors, setErrors] = useState({});

  useEffect(() => {
    router.prefetch('/');
  });

  const signup = async ({ email, password }) => {
    try {
      await auth.createUserWithEmailAndPassword(email, password);

      // send them to the home page
      Router.push({ pathname: '/' });
    } catch (error) {
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
        <title>Signup</title>
        <link rel='icon' href='/favicon.ico' importance='low' />
      </Head>


      <Row style={{ marginTop: 50 }} justify={'center'} type={'flex'}>
        <Col>
          <Title>Welcom to the Jungle</Title>
          <LoginForm onSubmit={signup} externalErrors={errors}/>

          <Link href={'/login'}>
            <a>Login</a>
          </Link>
        </Col>
      </Row>

    </Layout>
  );
};


export default SignUpPage;
