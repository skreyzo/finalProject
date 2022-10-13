const router = require('express').Router();
const { body } = require('express-validator');
const {
  registrationUser, loginUser, logoutUser, activateUser, refreshUserToken,
} = require('../controllers/user-controller');
const authMiddleware = require('../middlewares/auth-middleware');

router.post(
  '/registration',
  body('email').isEmail(), // валидация email
  body('password').isLength({ min: 8, max: 32 }), // валидация password по длине строки, от 8 до 32 символов
  registrationUser,
);
router.post('/login', loginUser);
router.post('/logout', logoutUser);
router.get('/activate/:link', activateUser);
// router.get('/refresh', refreshUserToken);
router.get('/refresh', authMiddleware, refreshUserToken);

module.exports = router;
