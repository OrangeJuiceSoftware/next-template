import React from 'react';

import { auth } from 'services/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';

import { Header } from 'components';
import { Layout } from 'antd';

const MyApp = ({ Component, pageProps }) => {
  const [user, loading, error] = useAuthState(auth);

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Header user={user} userLoading={loading} userError={error} {...pageProps}/>
      <Component user={user} userLoading={loading} userError={error} {...pageProps} />
    </Layout>
  );
};

export default MyApp;