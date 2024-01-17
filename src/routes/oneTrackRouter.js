import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
  res.render('OneTrackPage');
});

export default router;
