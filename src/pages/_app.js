import React from 'react';
import withUser from '~/src/components/hocs/withUser';
import Header from '~/src/components/layouts/header';

import { Layout } from 'antd';

const MyApp = ({ Component, pageProps }) => {
  const HeaderWithUser = withUser(Header);
  const ComponentWithUser = withUser(Component);

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <HeaderWithUser/>
      <ComponentWithUser {...pageProps} />
    </Layout>
  );
};

export default MyApp;