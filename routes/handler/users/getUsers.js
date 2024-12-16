const { User } = require('../../../models');

module.exports = async (req, resp) => {

  const userIds = req.query.user_ids || [];

  const sqlOptions = {
    attributes: ['id', 'name', 'email', 'role', 'profession', 'avatar']
  }

  if (userIds.length) {
    sqlOptions.where = {
      id: userIds
    }
  }

  const users = await User.findAll(sqlOptions);

  return resp.json({
    status: 'success',
    data: users,
  });
}