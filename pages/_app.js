import React from 'react';
import App from 'next/app';
import firebaseInit from '../client-services/firebaseInit';
import { useAuthState } from 'react-firebase-hooks/auth';

const firebase = firebaseInit();
const auth = firebase.auth();

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    const ComponentWithUser = withUser(Component);
    return <ComponentWithUser {...pageProps} />;
  }
}

const withUser = (WrappedComponent) => {
  return (props) => {
    const [user, loading, error] = useAuthState(auth);

    return <WrappedComponent user={user} {...props}/>;
  };
};


export default MyApp;