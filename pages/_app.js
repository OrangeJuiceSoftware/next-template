import React from 'react';
import App from 'next/app';
import withUser from '~/components/hocs/withUser';

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    const ComponentWithUser = withUser(Component);
    return <ComponentWithUser {...pageProps} />;
  }
}


export default MyApp;