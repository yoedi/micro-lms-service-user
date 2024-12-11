const bcrypt = require('bcrypt');
const Validator = require('fastest-validator');
const v = new Validator();
const { User } = require('../../../models/User');

module.exports = async (req, resp) => {
  const schema = {
    email: "email|empty:false",
    password: "string|min:6",
  }

  const validate = v.validate(req.body, schema);

  if (validate.length) {
    return resp.status(400).json({
      status: 'error',
      message: validate,
    });
  }

  const user = await User.findOne({
    where: { email: req.body.email }
  });
  if (!user) {
    return resp.status(404).json({
      status: 'error',
      message: 'user not found.',
    });
  }

  const isValidPassword = await bcrypt.compare(req.body.password, user.password);
  if (!isValidPassword) {
    return resp.status(404).json({
      status: 'error',
      message: 'email and password does not match.',
    });
  }

  return resp.json({
    status: 'success',
    data: {
      id: user.id,
      name: user.name,
      email: user.email,
      role: user.role,
      avatar: user.avatar,
      profession: user.profession,
    },
  });
}