import jwt from 'jsonwebtoken';
import 'dotenv/config';
import generateTokens from '../utils/generateTokens';
import cookiesConfig from '../config/cookiesConfig';

export const verifyRefreshToken = (req, res, next) => {
  try {
    const { refreshToken } = req.cookies;
    const { user } = jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET);

    res.locals.user = user;

    const { access, refresh } = generateTokens({ user });

    res
      .cookie('accessToken', access, cookiesConfig.access)
      .cookie('refreshToken', refresh, cookiesConfig.refresh);

    return next();
  } catch (error) {
    return res.sendStatus(401);
  }
};

export const verifyAccessToken = (req, res, next) => {
  try {
    const { accessToken } = req.cookies;
    const { user } = jwt.verify(accessToken, process.env.ACCESS_TOKEN_SECRET);
    res.locals.user = user;
    return next();
  } catch (error) {
    return verifyRefreshToken(req, res, next);
  }
};
