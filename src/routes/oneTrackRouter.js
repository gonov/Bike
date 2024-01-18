import express from 'express';
import {Track} from '../../db/models'

const router = express.Router();

// router.get('/', async (req, res) => {
//   const {tracks} = await Track.findAll()
//   const initState = {tracks}
//   res.render('OneTrackPage', initState);
// });

router.get('/', async (req, res) => {
  const tracks = await Track.findAll({ where: { id: 1 }, limit: 1 });
  const initState = { tracks };
  res.render('OneTrackPage', initState);
});

export default router;
