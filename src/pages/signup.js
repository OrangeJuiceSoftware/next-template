import React, { useState, useEffect } from 'react';
import firebase, { auth, firestore } from '../services/firebase';

import { useAuthRedirect } from '../hooks';

import Head from 'next/head';
import Link from 'next/link';
import Router, { useRouter } from 'next/router';

import { Button, Col, Icon, Row, Typography } from 'antd';
const { Text, Title } = Typography;
import { geekblue } from '@ant-design/colors';

import { Layout } from '~/src/components';
import LoginForm from '~/src/components/forms/auth/login-form';

import withUnlessAuthenticated from '~/src/components/hocs/withUnlessAuthenticated';

const SignUpPage = () => {
  const router = useRouter();
  const [errors, setErrors] = useState({});

  const { signinWithGitHub, signinWithGoogle } = useAuthRedirect();

  useEffect(() => {
    router.prefetch('/');
  }, []);


  const signupWithEmail = async ({ email, password }) => {
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
          <Title>Blueprints</Title>

          <Button
            style={{ backgroundColor: 'black', fontSize: 20, color: 'white' }}
            onClick={signinWithGitHub}
            icon={'github'}
            size={'large'}>

            <Text style={{ color: 'white', fontSize: 14 }}>Continue With Github</Text>
          </Button>

          <Button
            style={{ backgroundColor: geekblue[5], fontSize: 20, color: 'white' }}
            onClick={signinWithGoogle}
            icon={'google'}
            size={'large'}>

            <Text style={{ color: 'white', fontSize: 14 }}>Continue With Google</Text>
          </Button>

          <LoginForm actionText={'Sign Up'} onSubmit={signupWithEmail} externalErrors={errors}/>

          <Link href={'/login'}>
            <a>Login</a>
          </Link>
        </Col>
      </Row>

    </Layout>
  );
};


export default withUnlessAuthenticated(SignUpPage);