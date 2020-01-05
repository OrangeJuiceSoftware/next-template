import { useState, useEffect } from 'react';
import firebase, { auth, firestore } from '../services/firebase';

import Router from 'next/router';

const githubProvider = new firebase.auth.GithubAuthProvider();
const googleProvider = new firebase.auth.GoogleAuthProvider();

export default () => {
  const [result, setResult] = useState();
  const [redirectError, setRedirectError] = useState();

  useEffect(() => {
    auth.getRedirectResult().then(function(result) {
      if (result.credential) {
        // This gives you a GitHub Access Token. You can use it to access the GitHub API.
        var token = result.credential.accessToken;
      }

      // The signed-in user info.
      var user = result.user;

      if (user) {
        console.log('redirected from the redirect');
        Router.push({ pathname: '/' });
      }

    }).catch(function(error) {

      console.log(error);

      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // The email of the user's account used.
      var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;
    });
  }, []);

  const signinWithGitHub = () => {
    auth.signInWithRedirect(githubProvider);
  };

  const signinWithGoogle = () => {
    auth.signInWithRedirect(googleProvider);
  };

  return {
    signinWithGitHub,
    signinWithGoogle
  };
};