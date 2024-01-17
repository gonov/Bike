import { Router } from 'express';
import bcrypt from 'bcrypt';
// import { User } from '../../db/models';

const router = Router();

router.post('/signup', async (req, res) => {
  const [name, email, password] = req.body;
  if (!(name && email && password)) {
    return res.status(400).json({ message: 'Все поля должны быть заполнены' });
  }

//   const [user, created] = await User.findOrCreate({
//     where: { email },
//     defaults: { name, password: await bcrypt.hash(password, 10) },
//   });

//   if (!created) {
//     return res.status(403).json({
//       message: ' Такой пользователь уже существует',
//     });
//   }

  res.sendStatus(200);
});

export default router;
