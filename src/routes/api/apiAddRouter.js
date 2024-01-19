import express from 'express';
import { Track, Comment, Rating } from '../../../db/models';

const addRouter = express.Router();


addRouter.post('/track', async (req, res) => {
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

addRouter.post('/comment', async (req, res) => {
  //   console.log(res.locals.user.id);
    try {
      // console.log(req.body, '123474746546546546');
      if (!req.body.text) return res.status(500).json({ message: 'Empty title' });
      const newComment = await Comment.create({
        user_id: res.locals.user.id,
        ...req.body,
      });
      res.json(newComment);
    } catch (error) {
      console.log(error);
      res.status(500).json(error);
    }
  });

  addRouter.post('/rating', async (req, res) => {
    //   console.log(res.locals.user.id);
      try {
        // console.log(req.body, '123474746546546546');
        if (!req.body.point) return res.status(500).json({ message: 'Empty title' });
        const newRating = await Rating.create({
          user_id: res.locals.user.id,
          ...req.body,
        });
        const ratings = await Rating.findAll({ where: { track_id: req.params.track_id }});
        const ratingsMean = newRating.reduce((acc, curr) => acc + curr.point ,0) / ratings.length
        // среднее вычислить и отправить
        res.json(ratingsMean);
      } catch (error) {
        console.log(error);
        res.status(500).json(error);
      }
    });

export default addRouter;