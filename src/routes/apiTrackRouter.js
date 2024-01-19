// import express from 'express';
// import {Track} from '../../../db/models'


// const router = express.Router();


// router.delete('/api/profile/track/:id', async (req,res) => {
//   await Track.destroy({where: {id:req.params.id} });
//   res.sendStatus(200);
// })


// router.put('/api/profile/track/edit/:id', async(req,res) => {
//   const { title, city, start, finish} = req.body;
// console.log(req.params);
// const {id} = req.params;
//   const currentTrack = await Track.findByPk(id);
//   console.log(currentTrack);
//   currentTrack.title = title;
//   currentTrack.city = city;
//   currentTrack.start = start;
//   currentTrack.finish = finish;
//   await currentTrack.save();
//   res.sendStatus(200)
// })


// export default router;
