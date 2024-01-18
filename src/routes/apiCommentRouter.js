import express from 'express';
import {Comment} from '../../db/models'


const router = express.Router();




router.post('/', async (req, res) => {
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





export default router;
