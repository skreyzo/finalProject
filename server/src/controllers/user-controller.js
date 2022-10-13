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
    const { firstName, lastName, email, password } = req.body;
    const userData = await registration(firstName, lastName, email, password);
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
    console.log('~ userData >?>?>?>>>?>?>>', userData)
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
    console.log('~ req.cookies=======', req.cookies)
    
    console.log('~ refreshToken =====>>>>refreshUserToken', refreshToken)
    const userData = await refresh(refreshToken);
    res.cookie('refreshToken', userData.refreshToken, { maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true });
    return res.json(userData);
  } catch (error) {
    next(error);
  }
};

module.exports = {
registrationUser, loginUser, logoutUser, activateUser, refreshUserToken,
};
