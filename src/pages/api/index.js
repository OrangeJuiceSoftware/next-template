import admin, { auth, firestore } from './_services/firebase';
import Router from './_services/Router.js';


const router = Router();

const middleware = (req, res, next) => {
  return next(req, res);
};

router.get(middleware, (req, res) => {
  return res.status(201).json({ method: 'get in my as' });
});

export default router;