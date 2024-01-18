// import express from 'express';
// import {Track, Comment, Rating} from '../../db/models'


// const router = express.Router();

// router.get('/', async (req, res) => {
//   const tracks = await Track.findAll();
//   const initState = {tracks}
//   res.render('HomePage', initState);
// });

// router.get('/tracks/:track_id', async (req, res) => {
//   console.log({reqparams: req.params})
//   const tracks = await Track.findAll({ where: { id: req.params.track_id }});
//   const comments = await Comment.findAll({where: { track_id: req.params.track_id }})
//   const ratings = await Rating.findAll({ where: { track_id: req.params.track_id }});
//   const initState = { tracks, comments, ratings };
//   res.render('OneTrackPage', initState);
// });


// router.post('/', async (req, res) => {
//   console.log(res.locals.user.id);
//   try {
//     if (!req.body.text) return res.status(500).json({ message: 'Empty title' });
//     const newComment = await Comment.create({
//       user_id: res.locals.user.id,
//       ...req.body,
//     });
//     res.json(newComment);
//   } catch (error) {
//     console.log(error);
//     res.status(500).json(error);
//   }
// });



// export default router;
