import React, { useState, useEffect } from 'react';
import { auth } from 'services/firebase';
import Router, { useRouter } from 'next/router';

import { useAuthRedirect } from 'hooks';

import { mustNotBeAuthenticated } from 'middlewares';

import Layout from 'layouts/default-layout';
import { AuthForm } from 'forms';
import { Seo, Link } from 'components';

import { Button, Col, Icon, Row, Typography } from 'antd';
const { Text, Title } = Typography;
import { geekblue } from '@ant-design/colors';


const LoginPage = () => {
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
    // auth/email-already-in-use
    // auth/credential-already-in-use
    // auth/account-exists-with-different-credential


    // var errorCode = error.code;
    // var errorMessage = error.message;
    // var email = error.email;
    // var credential = error.credential;
  }

  useEffect(() => {
    router.prefetch('/dashboard');
  }, []);

  const loginWithEmail = async ({ email, password }) => {
    try {
      await auth.signInWithEmailAndPassword(email, password);

      // send them to the home page
      Router.push({ pathname: '/dashboard' });
    } catch (error) {

      // auth/user-disabled;
      // auth/user-not-found
      // auth/wrong-password

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
      <Seo title={'Login'}/>

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
            style={{ backgroundColor: geekblue[5], fontSize: 20, color: 'white' }}
            onClick={signInWithGoogle}
            icon={'google'}
            size={'large'}>

            <Text style={{ color: 'white', fontSize: 14 }}>Continue With Google</Text>
          </Button>

          <AuthForm actionText={'Login'} onSubmit={loginWithEmail} externalErrors={errors}/>

          <Link href={'/signup'}>Signup</Link>
        </Col>
      </Row>
    </Layout>
  );
};

export default mustNotBeAuthenticated(LoginPage);