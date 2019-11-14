import React, { useState, useEffect } from 'react';

import withUnlessAuthenticated from '~/src/components/hocs/withUnlessAuthenticated';

import Head from 'next/head';
import Link from 'next/link';
import Router, { useRouter } from 'next/router';

import firebaseInit from '../client-services/firebaseInit';
const { auth, firebase, firestore } = firebaseInit();

import { Button, Col, Icon, Row, Typography } from 'antd';
const { Text, Title } = Typography;

import { Layout } from '~/src/components';
import LoginForm from '~/src/components/forms/auth/login-form';

import { geekblue } from '@ant-design/colors';


const githubProvider = new firebase.auth.GithubAuthProvider();
const googleProvider = new firebase.auth.GoogleAuthProvider();

const LoginPage = () => {
  const router = useRouter();
  const [errors, setErrors] = useState({});

  useEffect(() => {
    router.prefetch('/');
  });

  useEffect(() => {
    auth.getRedirectResult().then(function(result) {
      if (result.credential) {
        // This gives you a GitHub Access Token. You can use it to access the GitHub API.
        var token = result.credential.accessToken;
        // ...
      }
      // The signed-in user info.
      var user = result.user;

      if (user) {
        console.log('redirected from the redirect');
        Router.push({ pathname: '/' });
      }


    }).catch(function(error) {

      console.log(error);

      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // The email of the user's account used.
      var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;
      // ...
    });
  });

  const loginWithGitHub = () => {
    auth.signInWithRedirect(githubProvider);
  };

  const loginWithGoogle = () => {
    auth.signInWithRedirect(googleProvider);
  };

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

      <Row style={{ marginTop: 50 }} justify={'center'} type={'flex'}>
        <Col>
          <Title>Welcom to the Jungle</Title>

          <Button
            style={{ backgroundColor: 'black', fontSize: 20, color: 'white' }}
            onClick={loginWithGitHub}
            icon={'github'}
            size={'large'}>

            <Text style={{ color: 'white', fontSize: 14 }}>Continue With Github</Text>
          </Button>

          <Button
            style={{ backgroundColor: geekblue[5], fontSize: 20, color: 'white' }}
            onClick={loginWithGoogle}
            icon={'google'}
            size={'large'}>

            <Text style={{ color: 'white', fontSize: 14 }}>Continue With Google</Text>
          </Button>

          <LoginForm onSubmit={login} externalErrors={errors}/>

          <Link href={'/signup'}>
            <a>Signup</a>
          </Link>
        </Col>
      </Row>

    </Layout>
  );
};

export default withUnlessAuthenticated(LoginPage);