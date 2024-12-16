const { User, RefreshToken } = require('../../../models');
const Validator = require('fastest-validator');
const v = new Validator();

module.exports = async (req, resp) => {
  const refreshToken = req.query.refreshToken;
  const token = await RefreshToken.findOne({
    where: { token: refreshToken }
  });

  if (!token) {
    return resp.status(400).json({
      status: 'error',
      message: 'invalid token',
    });
  }

  return resp.json({
    status: 'success',
    token
  });
}