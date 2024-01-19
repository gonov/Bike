// import express from 'express';
// import {Track,Comment} from '../../db/models';

// const router = express.Router();

// router.get('/', async (req, res) => {
//   const {tracks} = await Track.findAll()
//   const initState = {tracks}
//   res.render('HomePage', initState);
// });

// router.get('/:track_id', async (req, res) => {
//   console.log({reqparams: req.params})
//   const tracks = await Track.findAll({ where: { id: req.params.track_id }});
//   const comments = await Comment.findAll({where: { track_id: req.params.track_id }})
//   const initState = { tracks, comments };
//   res.render('OneTrackPage', initState);
// });

// export default router;
