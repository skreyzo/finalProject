const router = require('express').Router();
const { body } = require('express-validator');
const {
  display, registrationUser, loginUser, logoutUser, activateUser, refreshUserToken,
} = require('../controllers/user-controller');

router.post(
  '/registration',
  body('email').isEmail(), // валидация email
  body('password').isLength({ min: 8, max: 32 }), // валидация password по длине строки, от 8 до 32 символов
  registrationUser,
);
router.post('/login', loginUser);
router.post('/logout', logoutUser);
router.get('/activate/:link', activateUser);
router.get('/refresh', refreshUserToken);
router.get('/display', display);

module.exports = router;





















/* const { Router } = require('express');
const { body } = require('express-validator');
const userController = require('../controllers/user-controller');

const router = new Router();
const authMiddleware = require('../middlewares/auth-middleware');

router.post(
  '/registration',
  body('email').isEmail(),
  body('password').isLength({ min: 3, max: 32 }),
  userController.registration,
);
router.post('/login', userController.login);
router.post('/logout', userController.logout);
router.get('/activate/:link', userController.activate);
router.get('/refresh', userController.refresh);
router.get('/users', authMiddleware, userController.getUsers);

module.exports = router;
 */