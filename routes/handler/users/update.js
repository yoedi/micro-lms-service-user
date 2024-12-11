const bcrypt = require('bcrypt');
const Validator = require('fastest-validator');
const v = new Validator();
const { User } = require('../../../models');

module.exports = async (req, resp) => {
  const schema = {
    name: "string|empty:false",
    email: "email|empty:false",
    password: "string|min:6",
    profession: "string|optional",
  }

  const validate = v.validate(req.body, schema);
  if (validate.length) {
    return resp.status(400).json({
      status: 'error',
      message: validate,
    });
  }

  const id = req.params.id;
  const user = await User.findByPk(id);
  if (!user) {
    return resp.status(404).json({
      status: 'error',
      message: 'user not found.',
    });
  }

  const email = req.body.email;
  if (email !== user.email) {
    const isEmailExist = User.findOne({
      where: { email: email }
    });

    if (isEmailExist) {
      return resp.status(404).json({
        status: 'error',
        message: 'email already exist.',
      });
    }
  }

  const hashPassword = await bcrypt.hash(req.body.password, 10);
  const { name, profession, avatar } = req.body;
  await user.update({
    email,
    password,
    name,
    profession,
    avatar,
    updatedAt: new Date(),
  });

  return resp.json({
    status: 'success',
    data: {
      id,
      name,
      email,
      profession,
      avatar,
    },
  });
}