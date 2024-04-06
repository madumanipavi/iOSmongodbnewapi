const User = require('../models/userModel');
const jwt = require('jsonwebtoken');
require('dotenv').config();

async function login(req, res) {
  const username = req.body.username;
  const password = req.body.password;
  console.log(username);
  console.log(password);
  try {
    const user = await User.findOne({
      username: username,
      password: password,
    }).exec();
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    const accessToken = jwt.sign(
      user.toJSON(),
      process.env.ACCESS_TOKEN_SECRET
    );
    res.status(200).json({ authtoken: accessToken, user: user });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

module.exports = {
  login: login,
};
