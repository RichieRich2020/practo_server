const express = require('express');
const {
  register,
  login,
  getLoggedInUser,
  signinWithGitub,
  getAllUser,
} = require('../controllers/auth');
const authMiddleware = require('../middlewares/auth');

const authRouter = express.Router();

authRouter.post('/register', register);
authRouter.post('/login', login);
authRouter.get('/', getAllUser);
// authRouter.get('/github-signin/:code',
authRouter.get('/loggedInUser', authMiddleware, getLoggedInUser);

module.exports = authRouter;
