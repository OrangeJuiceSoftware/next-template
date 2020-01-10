import React from 'react';
import { auth } from 'services/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';

export default (WrappedComponent) => {
  return (props) => {
    const [user, loading, error] = useAuthState(auth);

    return <WrappedComponent user={user} userLoading={loading} userError={error} {...props}/>;
  };
};
