import React, { useState } from 'react';
import Router from 'next/router';

import firebaseInit from '~/src/client-services/firebaseInit';
import { Layout, Row, Col, Menu, Icon, Dropdown, Button } from 'antd';


const { auth, firestore } = firebaseInit();
const { Header } = Layout;

import { orange } from '@ant-design/colors';

const menu = (
  <Menu style={{ padding: 16 }}>

    <Menu.Item onClick={() => Router.push('/account-settings')} key="account">
      <Icon type="setting" />
      Account
    </Menu.Item>

    <Menu.Item onClick={() => auth.signOut()} key="logout">
      <Icon type="poweroff"/>
      Logout
    </Menu.Item>
  </Menu>
);

const PageHeader = () => {
  return (
    <Header style={{ background: '#fff', padding: 0 }}>
      <Row type={'flex'} align={'middle'} justify={'space-between'}>
        <div style={{
          height: 32,
          width: 218,
          background: orange[5],
          margin: 16
        }}/>

        <Row style={{ margin: '0 16px' }}>
          <Dropdown trigger={'click'} overlay={menu}>
            <Button size={'large'}>
              <Icon style={{ fontSize: 20 }} type="user" />
            </Button>
          </Dropdown>
        </Row>
      </Row>
    </Header>
  );
};

export default PageHeader;


