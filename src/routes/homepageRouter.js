import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
  res.render('HomePage');
});

export default router;
