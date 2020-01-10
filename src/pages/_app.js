import React from 'react';
import { withUser } from 'hocs';
import { Header } from 'components';

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