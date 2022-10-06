const bcrypt = require('bcrypt');
const uuid = require('uuid');

const { User } = require('../../db/models');
const { sendActivationMail } = require('./mail-service');
const {
  generateTokens, validateRefreshToken, saveToken, removeToken, findToken,
} = require('./token-service');
const UserDto = require('../dtos/user-dto');

const ApiError = require('../exceptions/api-error');

const registration = async (email, password) => {
  // проверяем нет ли такого пользователя в БД
  // const visitor = await User.findOne({ where: { email } });

  // // если пользователь уже есть в БД - выводим ошибку
  // if (visitor) {
  //   throw ApiError.BadRequest('This email is already in use');
  // }

  // хешируем пароль
  const hashPassword = await bcrypt.hash(password, 5);

  // делаем ссылку для активации пользователя
  const activationLink = uuid.v4();
  console.log('~ activationLink-1-1-1-1-1-1-1-1-!_-1_1-1-!', activationLink)

  // сохраняем пользователя в БД
  const user = await User.create({ email, password: hashPassword, isActivated: false, activationLink });
  console.log('~ user------------------>', user)

  // отправляем пользователю письмо на его почту для активации учетной записи
  await sendActivationMail(email, `${process.env.API_URL}/api/activate/${activationLink}`);
  // DTO -> data transfer object
  // DTO создаем на основании модели, чтобы не передавать на сервер ненужные поля
  const userDto = new UserDto(user);
  console.log('~ userDto=================', userDto)
  // данный DTO обладает всего тремя полями -> id, email, isActivaited

  // генерируеи токины
  const tokens = generateTokens({ ...userDto });
  console.log('~ tokens--------------', tokens)

  // сохраняем рефреш токин в БД
  await saveToken(user.id, tokens.refreshToken);

  // возвращаем из функции информацию о пользователе и токины
  return { ...tokens, user: userDto };
};

const activate = async (activationLink) => {
  console.log('~ activationLink 22222222222', activationLink)
  const user = await User.findOne({ where: { activationLink } });
  if (!user) {
    throw ApiError.BadRequest('invalid activation link');
  }
  user.isActivated = true;
  await user.save();
};

const login = async (email, password) => {
  const user = await User.findOne({ where: { email } });
  if (!user) {
    throw ApiError.BadRequest('user with this email address were not found');
  }

  const isPasswordEquals = await bcrypt.compare(password, user.password);
  if (!isPasswordEquals) {
    throw ApiError.BadRequest('wrong password');
  }

  const userDto = new UserDto(user);
  const tokens = generateTokens({ ...userDto });

  await saveToken(userDto.id, tokens.refreshToken);
  return { ...tokens, user: userDto };
};

const logout = async (refreshToken) => {
  console.log('~ refreshToken 5555555555555555', refreshToken)
  const token = await removeToken(refreshToken);
  return token;
};

const refresh = async (refreshToken) => {
  if (!refreshToken) {
    throw ApiError.UnauthorizedError();
  }
  const userData = validateRefreshToken(refreshToken);
  const tokenFromDb = await findToken(refreshToken);
  if (!userData || !tokenFromDb) {
    throw ApiError.UnauthorizedError();
  }

  const user = await User.findByPk(userData.id);

  const userDto = new UserDto(user);
  const tokens = generateTokens({ ...userDto });

  await saveToken(userDto.id, tokens.refreshToken);
  return { ...tokens, user: userDto };
};

module.exports = {
  registration, activate, login, logout, refresh,
};























// const bcrypt = require('bcrypt');
// const uuid = require('uuid');
// const { User } = require('../../db/models/user');
// const mailService = require('./mail-service');
// const tokenService = require('./token-service');
// const UserDto = require('../dtos/user-dto');
// const ApiError = require('../exceptions/api-error');

// class UserService {
//   async registration(email, password) {
//     const candidate = await User.findOne({ where: { email } });
//     if (candidate) {
//       throw ApiError.BadRequest(`Пользователь с почтовым адресом ${email} уже существует`);
//     }
//     const hashPassword = await bcrypt.hash(password, 3);
//     const activationLink = uuid.v4(); // v34fa-asfasf-142saf-sa-asf

//     const user = await User.create({ email, password: hashPassword, activationLink });
//     await mailService.sendActivationMail(email, `${process.env.API_URL}/api/activate/${activationLink}`);

//     const userDto = new UserDto(user); // id, email, isActivated
//     const tokens = tokenService.generateTokens({ ...userDto });
//     await tokenService.save(userDto.id, tokens.refreshToken);

//     return { ...tokens, user: userDto };
//   }

//   async activate(activationLink) {
//     const user = await User.findOne({ activationLink });
//     if (!user) {
//       throw ApiError.BadRequest('Неккоректная ссылка активации');
//     }
//     user.isActivated = true;
//     await user.save();
//   }

//   async login(email, password) {
//     const user = await User.findOne({ where: { email } });
//     if (!user) {
//       throw ApiError.BadRequest('Пользователь с таким email не найден');
//     }
//     const isPassEquals = await bcrypt.compare(password, user.password);
//     if (!isPassEquals) {
//       throw ApiError.BadRequest('Неверный пароль');
//     }
//     const userDto = new UserDto(user);
//     const tokens = tokenService.generateTokens({ ...userDto });

//     await tokenService.save(userDto.id, tokens.refreshToken);
//     return { ...tokens, user: userDto };
//   }

//   async logout(refreshToken) {
//     const token = await tokenService.removeToken(refreshToken);
//     return token;
//   }

//   async refresh(refreshToken) {
//     if (!refreshToken) {
//       throw ApiError.UnauthorizedError();
//     }
//     const userData = tokenService.validateRefreshToken(refreshToken);
//     const tokenFromDb = await tokenService.findToken(refreshToken);
//     if (!userData || !tokenFromDb) {
//       throw ApiError.UnauthorizedError();
//     }
//     const user = await User.findByPk(userData.id);
//     const userDto = new UserDto(user);
//     const tokens = tokenService.generateTokens({ ...userDto });

//     await tokenService.save(userDto.id, tokens.refreshToken);
//     return { ...tokens, user: userDto };
//   }
// }

// module.exports = new UserService();