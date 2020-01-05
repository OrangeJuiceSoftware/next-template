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

const LoginPage = () => {
  const router = useRouter();
  const [errors, setErrors] = useState({});

  const [result, redirectError, { signinWithGitHub, signinWithGoogle }] = useAuthRedirect();

  if (result) {
    // This gives you a GitHub Access Token. You can use it to access the GitHub API.
    if (result.token) {
      var token = result.credential.accessToken;
    }

    if (result.user) {
      Router.push({ pathname: '/' });
    }
  }

  if (redirectError) {
    // var errorCode = error.code;
    // var errorMessage = error.message;
    // // The email of the user's account used.
    // var email = error.email;
    // // The firebase.auth.AuthCredential type that was used.
    // var credential = error.credential;
  }

  useEffect(() => {
    router.prefetch('/');
  }, []);

  const loginWithEmail = async ({ email, password }) => {
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

          <LoginForm actionText={'Login'} onSubmit={loginWithEmail} externalErrors={errors}/>

          <Link href={'/signup'}>
            <a>Signup</a>
          </Link>
        </Col>
      </Row>

    </Layout>
  );
};

export default withUnlessAuthenticated(LoginPage);