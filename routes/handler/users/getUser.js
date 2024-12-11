const bcrypt = require('bcrypt');
const Validator = require('fastest-validator');
const v = new Validator();
const { User } = require('../../../models/User');

module.exports = async (req, resp) => {
  const id = req.params.id;

  const user = await User.findByPk(id, {
    attributes: ['id', 'name', 'email', 'role', 'profession', 'avatar']
  });

  if (!user) {
    return resp.status(409).json({
      status: 'error',
      message: 'user not found.',
    });
  }

  return resp.json({
    status: 'success',
    data: user,
  });
}