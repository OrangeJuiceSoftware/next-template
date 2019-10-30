import firebaseInit from '../_services/firebaseInit';
import cookie from 'cookie';

const admin = firebaseInit();
const auth = admin.auth();

export default async (req, res) => {
  const idToken = req.body.idToken.toString();

  // const csrfToken = req.body.csrfToken.toString();
  // Guard against CSRF attacks.
  // if (csrfToken !== req.cookies.csrfToken) {
  //   res.status(401).send('UNAUTHORIZED REQUEST!');
  //   return;
  // }

  // Set session expiration to 5 days.
  const expiresIn = 60 * 60 * 24 * 5;
  // Create the session cookie. This will also verify the ID token in the process.
  // The session cookie will have the same claims as the ID token.
  // To only allow session cookie setting on recent sign-in, auth_time in ID token
  // can be checked to ensure user was recently signed in before creating a session cookie.
  try {
    const sessionCookie = await auth.createSessionCookie(idToken, { expiresIn });
    // Set cookie policy for session cookie.
    const options = {
      maxAge: expiresIn,
      path: '/'
      // httpOnly: true
      // maybe do this one in prod????
      // secure: true
    };

    res.writeHead(200, {
      'Set-Cookie': cookie.serialize('session', sessionCookie, options),
      'Content-Type': 'text/plain'
    }).end(JSON.stringify({ status: 'success' }));
  } catch (error) {
    console.log(error);
    return res.status(401).send('UNAUTHORIZED REQUEST!');
  }
};