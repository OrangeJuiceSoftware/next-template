import React, { useState, useEffect } from 'react';

import withUnlessAuthenticated from '~/src/components/hocs/withUnlessAuthenticated';

import Head from 'next/head';
import Link from 'next/link';
import Router, { useRouter } from 'next/router';

import firebaseInit from '../client-services/firebaseInit';
const { auth, firestore } = firebaseInit();

import { Row, Col, Typography } from 'antd';
const { Title } = Typography;

import { Layout } from '~/src/components';
import LoginForm from '~/src/components/forms/auth/login-form';

const SignUpPage = () => {
  const router = useRouter();
  const [errors, setErrors] = useState({});

  useEffect(() => {
    router.prefetch('/');
  });

  const signup = async ({ email, password }) => {
    try {
      await auth.createUserWithEmailAndPassword(email, password);

      // TODO: create firestore user

      // send them to the home page
      Router.push({ pathname: '/' });
    } catch (error) {
      // if firestore user failed logout

      // if already exists in auth but no firestore self heal

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


export default withUnlessAuthenticated(SignUpPage);