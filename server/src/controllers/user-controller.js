const { validationResult } = require('express-validator');
const {
  registration, activate, login, logout, refresh,
} = require('../service/user-service');

const ApiError = require('../exceptions/api-error');

const registrationUser = async (req, res, next) => {
  console.log('~ req.body============>', req.body)
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return next(ApiError.BadRequest('validation error', errors.array())); // передаем ошибку в middleware
    }
    const { email, password } = req.body;
    const userData = await registration(email, password);
    console.log('~ userData ==========>>', userData)
    res.cookie('refreshToken', userData.refreshToken, { maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true });
    return res.json(userData);
  } catch (error) {
    next(error);
  }
};

const loginUser = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const userData = await login(email, password);
    res.cookie('refreshToken', userData.refreshToken, { maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true });
    return res.json(userData);
  } catch (error) {
    next(error);
  }
};

const logoutUser = async (req, res, next) => {
  try {
    const { refreshToken } = req.cookies;
    console.log('~ refreshToken ======from cookie----------', refreshToken)
    const token = await logout(refreshToken);
    res.clearCookie('refreshToken');
    res.status(200);
    res.json(token);
  } catch (error) {
    next(error);
  }
};
const activateUser = async (req, res, next) => {
  try {
    const activationLink = req.params.link;
    await activate(activationLink);
    return res.redirect(process.env.CLIENT_URL);
  } catch (error) {
    next(error);
  }
};
const refreshUserToken = async (req, res, next) => {
  try {
    const { refreshToken } = req.cookies;
    const userData = await refresh(refreshToken);
    res.cookie('refreshToken', userData.refreshToken, { maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true });
    return res.json(userData);
  } catch (error) {
    next(error);
  }
};

const display = (req, res) => {
  try {
    res.json('hellooooooo');
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  display, registrationUser, loginUser, logoutUser, activateUser, refreshUserToken,
};













/* const { validationResult } = require('express-validator');
const userService = require('../service/user-service');
const ApiError = require('../exceptions/api-error');

class UserController {
  async registration(req, res, next) {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return next(ApiError.BadRequest('Ошибка при валидации', errors.array()));
      }
      const { email, password } = req.body;
      const userData = await userService.registration(email, password);
      res.cookie('refreshToken', userData.refreshToken, { maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true });
      return res.json(userData);
    } catch (e) {
      next(e);
    }
  }

  async login(req, res, next) {
    try {
      const { email, password } = req.body;
      const userData = await userService.login(email, password);
      res.cookie('refreshToken', userData.refreshToken, { maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true });
      return res.json(userData);
    } catch (e) {
      next(e);
    }
  }

  async logout(req, res, next) {
    try {
      const { refreshToken } = req.cookies;
      const token = await userService.logout(refreshToken);
      res.clearCookie('refreshToken');
      return res.json(token);
    } catch (e) {
      next(e);
    }
  }

  async activate(req, res, next) {
    try {
      const activationLink = req.params.link;
      await userService.activate(activationLink);
      return res.redirect(process.env.CLIENT_URL);
    } catch (e) {
      next(e);
    }
  }

  async refresh(req, res, next) {
    try {
      const { refreshToken } = req.cookies;
      const userData = await userService.refresh(refreshToken);
      res.cookie('refreshToken', userData.refreshToken, { maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true });
      return res.json(userData);
    } catch (e) {
      next(e);
    }
  }

  async getUsers(req, res, next) {
    try {
      const users = await userService.getAllUsers();
      return res.json(users);
    } catch (e) {
      next(e);
    }
  }
}

module.exports = new UserController(); */
