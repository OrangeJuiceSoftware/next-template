import React from 'react';
import firebaseInit from '~/client-services/firebaseInit';
import { useAuthState } from 'react-firebase-hooks/auth';

const firebase = firebaseInit();
const auth = firebase.auth();

export default (WrappedComponent) => {
  return (props) => {
    const [user, loading, error] = useAuthState(auth);

    return <WrappedComponent user={user} userLoading={loading} userError={error} {...props}/>;
  };
};