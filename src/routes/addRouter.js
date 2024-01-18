import express from 'express';
import { Track } from '../../db/models';

const addRouter = express.Router();

addRouter.get('/', (req, res)=>{
    res.render('AddPage')
})

addRouter.post('/', async (req, res) => {
  console.log(res.locals.track?.id);
  try {
    if (!req.body.title) return res.status(500).json({ message: 'Empty title' });
    const newTrack = await Track.create({
    user_id: res.locals.user?.id,
      
      ...req.body,
    });
    res.json(newTrack);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

export default addRouter;