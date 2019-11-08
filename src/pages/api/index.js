import firebaseInit from './_services/firebaseInit';
import Router from './_services/Router.js';

const admin = firebaseInit();
const firestore = admin.firestore();

const router = Router();

const middleware = (req, res, next) => {
  req.fuckme = 'in the pussy?';
  return next(req, res);
};

router.get(middleware, (req, res) => {
  console.log(req.fuckme);
  return res.status(201).json({ method: 'get in my as' });
});

export default router;