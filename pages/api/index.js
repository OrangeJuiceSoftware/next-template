import firebaseInit from './_services/firebaseInit';

const admin = firebaseInit();
const firestore = admin.firestore();
const auth = admin.auth();

// get, post, put, delete, split
export default async (req, res) => {
  console.log(req.cookies);
  console.log(req.headers);


  const test = await firestore.collection('spells-aidded').doc('alarm').get();

  res.setHeader('Content-Type', 'application/json');
  res.status(201);
  res.send(JSON.stringify({ name: 'hi' }));
};