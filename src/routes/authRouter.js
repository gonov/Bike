import { Router } from 'express';

const router = Router();

router.get('/signup', (req, res) => {
  res.render('SignUpPage');
});
router.get('/login', (req, res) => {
  res.render('LoginPage');
});
router.get('/logout', (req, res) => {
  res.clearCookie('accessToken').clearCookie('refreshToken').redirect('/')
});

export default router;
