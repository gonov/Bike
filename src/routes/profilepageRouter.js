import express from 'express';
import {Track, User} from '../../db/models';

const router = express.Router();

router.get('/:userId', async (req, res) => {
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

export default router;
