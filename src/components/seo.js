import React from 'react';
import Head from 'next/head';

export default ({ children, title }) => {
  return (
    <Head>
      <title>{title}</title>
      <link rel='icon' href='/favicon.ico' importance='low'/>
      {children}
    </Head>
  );
};