import React, { useEffect } from 'react';
import Router from 'next/router';

export default (WrappedComponent) => {
  return (props) => {
    useEffect(() => {
      if (props.user && !props.userLoading) {
        Router.push({ pathname: '/dashboard' });
      }
    }, [props.user, props.userLoading]);

    return <WrappedComponent {...props}/>;
  };
};