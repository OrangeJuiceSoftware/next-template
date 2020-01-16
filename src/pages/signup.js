import React, { useState, useEffect } from 'react';
import firebase, { auth, firestore } from 'services/firebase';
import Router, { useRouter } from 'next/router';

import { useAuthRedirect } from 'hooks';
import { mustNotBeAuthenticated } from 'middlewares';

import Layout from 'layouts/default-layout';
import { Seo, Link } from 'components';

import { Button, Col, Icon, Row, Typography } from 'antd';
const { Text, Title } = Typography;
import { geekblue } from '@ant-design/colors';

import { AuthForm } from 'forms';

const SignUpPage = () => {
  const router = useRouter();
  const [result, redirectError, { signInWithGitHub, signInWithGoogle }] = useAuthRedirect();
  const [errors, setErrors] = useState({});

  // this action will get be duplicated by the middleware but lets leave it here for now
  // result also contains the token
  if (result && result.user) {
    Router.push({ pathname: '/dashboard' });
  }

  // https://firebase.google.com/docs/reference/js/firebase.auth.Auth.html#getredirectresult
  if (redirectError) {
    // var errorCode = error.code;
    // var errorMessage = error.message;
    // var email = error.email;
    // var credential = error.credential;
  }

  useEffect(() => {
    router.prefetch('/dashboard');
  }, []);

  const signupWithEmail = async ({ email, password }) => {
    try {
      await auth.createUserWithEmailAndPassword(email, password);

      // TODO: create firestore user

      // send email verification

      // send them to the home page
      Router.push({ pathname: '/dashboard' });
    } catch (error) {
      console.log(error);

      // auth/email-already-in-use
      // auth/argument-error
      // auth/invalid-email
      // auth/weak-password


      // setErrors({
      //   form: 'sfdsf',
      //   email: 'sfdsf'
      //   password: 'sfdsf'
      // })
    }
  };

  return (
    <Layout>
      <Seo title={'Signup'}/>

      <Row style={{ marginTop: 50 }} justify={'center'} type={'flex'}>
        <Col>
          <Title>Blueprints</Title>

          <Button
            style={{ backgroundColor: 'black', fontSize: 20, color: 'white' }}
            onClick={signInWithGitHub}
            icon={'github'}
            size={'large'}>

            <Text style={{ color: 'white', fontSize: 14 }}>Continue With Github</Text>
          </Button>

          <Button
            onClick={signInWithGoogle}
            style={{ backgroundColor: geekblue[5], fontSize: 20, color: 'white' }}
            icon={'google'}
            size={'large'}>

            <Text style={{ color: 'white', fontSize: 14 }}>Continue With Google</Text>
          </Button>

          <AuthForm actionText={'Sign Up'} onSubmit={signupWithEmail} externalErrors={errors}/>

          <Link href={'/login'}>
            <a>Login</a>
          </Link>
        </Col>
      </Row>
    </Layout>
  );
};

export default mustNotBeAuthenticated(SignUpPage);