import { Router } from 'express';

const router = Router();

router.get('/signup', (req, res) => {
  res.render('SignUpPage');
});
router.get('/login', (req, res) => {
  res.render('LoginPage');
});

export default router;
