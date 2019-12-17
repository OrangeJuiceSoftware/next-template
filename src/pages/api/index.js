import firebaseInit from './_services/firebaseInit';
import Router from './_services/Router.js';

const { firestore } = firebaseInit();

const router = Router();

const middleware = (req, res, next) => {
  return next(req, res);
};

router.get(middleware, (req, res) => {
  return res.status(201).json({ method: 'get in my as' });
});

export default router;