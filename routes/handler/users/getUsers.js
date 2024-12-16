const { User } = require('../../../models');

module.exports = async (req, resp) => {

  const users = await User.findAll({
    attributes: ['id', 'name', 'email', 'role', 'profession', 'avatar']
  });

  return resp.json({
    status: 'success',
    data: users,
  });
}