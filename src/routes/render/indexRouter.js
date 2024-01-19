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
      where: {user_id:res.locals.user.id}
    });
  res.render('ProfilePage', {trackData, userData});
  } catch (error) {
    console.log(error);
  }
});

// на удаление 1 трэка
router.delete('/api/profile/track/:id', async (req,res) => {
  await Track.destroy({where: {id:req.params.id} });
  res.sendStatus(200);
})

// редактирование маршрута
router.put('/api/profile/track/edit/:id', async(req,res) => {
  const { title, city, start, finish} = req.body;
console.log(req.params);
const {id} = req.params;
  const currentTrack = await Track.findByPk(id);
  console.log(currentTrack);
  currentTrack.title = title;
  currentTrack.city = city;
  currentTrack.start = start;
  currentTrack.finish = finish;
  await currentTrack.save();
  res.sendStatus(200)
})

router.get('/:track_id', async (req, res) => {
    console.log({reqparams: req.params})
    const tracks = await Track.findAll({ where: { id: req.params.track_id }});
    const comments = await Comment.findAll({where: { track_id: req.params.track_id }})
    const ratings = await Rating.findAll({ where: { track_id: req.params.track_id }});
    const initState = { tracks, comments, ratings };
    res.render('OneTrackPage', initState);
  });

export default router;
