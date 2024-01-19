import jwt from 'jsonwebtoken';
import 'dotenv/config';

const resLocals = (req, res, next) => {
  try {
    const { refreshToken } = req.cookies;
    const { user } = jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET);
    res.locals.user = user;
  } catch (error) {
    console.log(error);
  } finally {
    next();
  }
};

export default resLocals;