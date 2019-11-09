import React from 'react';
import App from 'next/app';
import withUser from '~/src/components/hocs/withUser';
import Header from '~/src/components/layouts/header';

import { Layout } from 'antd';

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    const ComponentWithUser = withUser(Component);
    const HeaderWithUser = withUser(Header);

    return (
      <Layout style={{ minHeight: '100vh' }}>
        <HeaderWithUser/>
        <ComponentWithUser {...pageProps} />
      </Layout>
    );
  }
}


export default MyApp;