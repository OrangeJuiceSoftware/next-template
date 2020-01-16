import React, { useEffect } from 'react';
import { auth, firestore } from 'services/firebase';

import { mustBeAuthenticated } from 'middlewares';

import Layout from 'layouts/settings-layout';
import { Seo, Link } from 'components';

import { Button, Icon, Menu } from 'antd';

const OrganizationSettings = () => {
  return (
    <Layout>
      <Seo title={'Settings'}/>
      <p>orgs</p>
    </Layout>
  );
};

export default mustBeAuthenticated(OrganizationSettings);
