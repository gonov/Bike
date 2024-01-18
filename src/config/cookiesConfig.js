const { default: jwtConfig } = require('./jwtConfig');

const cookiesConfig = {
  access: {
    httpOnly: true,
    maxAge: jwtConfig.access.expiresIn,
  },
  refresh: {
    httpOnly: true,
    maxAge: jwtConfig.refresh.expiresIn,
  },
};

export default cookiesConfig;

