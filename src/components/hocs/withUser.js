import React from 'react';
import firebaseInit from '~/src/client-services/firebaseInit';
import { useAuthState } from 'react-firebase-hooks/auth';

const { auth } = firebaseInit();

export default (WrappedComponent) => {
  return (props) => {
    const [user, loading, error] = useAuthState(auth);

    return <WrappedComponent user={user} userLoading={loading} userError={error} {...props}/>;
  };
};