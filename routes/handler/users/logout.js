const { User, RefreshToken } = require('../../../models');

module.exports = async (req, resp) => {
  const userId = req.body.userId;
  const user = await User.findByPk(userId);

  if (!user) {
    return resp.status(409).json({
      status: 'error',
      message: 'user not found.',
    });
  }

  await RefreshToken.destroy({
    where: { user_id: userId }
  });

  return resp.json({
    status: 'success',
    message: 'refresh token deleted',
  });
}