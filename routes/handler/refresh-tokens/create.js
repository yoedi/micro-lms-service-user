const { User, RefreshToken } = require('../../../models');
const Validator = require('fastest-validator');
const v = new Validator();

module.exports = async (req, resp) => {
  const userId = req.body.userId;
  const refreshToken = req.body.refreshToken;

  const schema = {
    refreshToken: "string",
    userId: "number",
  }

  const validate = v.validate(req.body, schema);
  if (validate.length) {
    return resp.status(400).json({
      status: 'error',
      message: validate,
    });
  }

  const user = await User.findByPk(userId);
  if (!user) {
    return resp.status(404).json({
      status: 'error',
      message: 'user not found.',
    });
  }

  const createdRefreshToken = await RefreshToken.create({
    token: refreshToken,
    user_id: userId
  })

  return resp.json({
    status: 'success',
    data: {
      id: createdRefreshToken.id
    },
  });
}