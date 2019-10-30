import React from 'react';
import App from 'next/app';
import firebaseInit from './_services/firebaseInit';
import jsCookies from 'js-cookie';

const firebase = firebaseInit();
const auth = firebase.auth();


class MyApp extends App {
  // Only uncomment this method if you have blocking data requirements for
  // every single page in your application. This disables the ability to
  // perform automatic static optimization, causing every page in your app to
  // be server-side rendered.
  //
  // static async getInitialProps(appContext) {
  //   // calls page's `getInitialProps` and fills `appProps.pageProps`
  //   const appProps = await App.getInitialProps(appContext);
  //
  //   return { ...appProps }
  // }

  componentDidMount = async () => {
    // const sessionToken = jsCookies.get('session');
    // console.log(sessionToken);

    // try {
    //   const { user } = await auth.signInWithCustomToken(sessionToken);
    //   console.log(user);

    // } catch (error) {
    //   console.log(error);
    // }
  }

  render() {
    const { Component, pageProps } = this.props;
    return <Component {...pageProps} />;
  }
}

export default MyApp;