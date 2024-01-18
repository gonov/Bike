import express from 'express';
import {Track, Comment, Rating, User} from '../../../db/models'


const router = express.Router();

router.get('/', async (req, res) => {
  const tracks = await Track.findAll();
  const initState = {tracks}
  res.render('HomePage', initState);
});

router.get('/add', (req, res)=>{
    res.render('AddPage')
})

router.get('/profile/:userId', async (req, res) => {
  try {
    const userData = await User.findAll({
      where: {id:res.locals.user.id}
    });
    const trackData = await Track.findAll({
      where: {id:res.locals.user.id}
    });
  res.render('ProfilePage', {trackData, userData});
  } catch (error) {
    console.log(error);
  }
});

router.get('/:track_id', async (req, res) => {
    console.log({reqparams: req.params})
    const tracks = await Track.findAll({ where: { id: req.params.track_id }});
    const comments = await Comment.findAll({where: { track_id: req.params.track_id }})
    const ratings = await Rating.findAll({ where: { track_id: req.params.track_id }});
    const initState = { tracks, comments, ratings };
    res.render('OneTrackPage', initState);
  });

export default router;
