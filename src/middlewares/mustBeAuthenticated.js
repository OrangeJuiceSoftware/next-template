import React, { useEffect } from 'react';
import Router from 'next/router';

export default (WrappedComponent) => {
  return (props) => {
    useEffect(() => {
      if (!props.user && !props.userLoading) {
        console.log('back to the dashboard');

        Router.push({ pathname: '/login' });
      }
    }, [props.user, props.userLoading]);

    return <WrappedComponent {...props}/>;
  };
};