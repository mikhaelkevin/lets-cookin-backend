const { ErrorResponse } = require('../../utils/errorResponse');
const { getUserByEmailModel } = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const login = async (req, res) => {
  const { email, password } = req.body;
  const getUserByEmail = await getUserByEmailModel(email);
  if (!getUserByEmail.length) throw new ErrorResponse('Incorrect email address', 404);

  const passwordCompareResult = bcrypt.compareSync(password, getUserByEmail?.[0]?.password);
  if (!passwordCompareResult) throw new ErrorResponse('Incorrect password', 422);

  const token = jwt.sign(getUserByEmail?.[0], process.env.SECRET_KEY, { expiresIn: '12h' });
  res.status(200).send({
    message: 'Login success',
    token,
    user: { ...getUserByEmail?.[0], ...{ password: null } }
  });
};

module.exports = { login };
