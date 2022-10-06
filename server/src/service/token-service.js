const jwt = require('jsonwebtoken');
const { Token } = require('../../db/models');

const generateTokens = (payload) => {
  const accessToken = jwt.sign(payload, process.env.JWT_ACCESS_SECRET, { expiresIn: '5m' });
  const refreshToken = jwt.sign(payload, process.env.JWT_REFRESH_SECRET, { expiresIn: '30d' });
  return {
    accessToken,
    refreshToken,
  };
};

const validateAccessToken = (token) => {
  try {
    const userData = jwt.verify(token, process.env.JWT_ACCESS_SECRET); // верификация токена
    return userData;
  } catch (error) {
    return null;
  }
};

const validateRefreshToken = (token) => {
  try {
    const userData = jwt.verify(token, process.env.JWT_REFRESH_SECRET);
    return userData;
  } catch (error) {
    return null;
  }
};

const saveToken = async (userId, refreshToken) => {
  console.log('~ refreshToken>>>>>>>>>', refreshToken)
  console.log('~ userId>>>>>', userId)
  const tokenData = await Token.findOne({ where: { userId } });
  if (tokenData) {
    tokenData.refreshToken = refreshToken;
    return tokenData.save();
  }
  const token = await Token.create({ userId, refreshToken });
  console.log('40 token=service>>>>>>>>>>', token)
  return token;
};

const removeToken = async (refreshToken) => {
  console.log('~ refreshToken-----to del------>>>', refreshToken)
  const tokenData = await Token.destroy({ where: { refreshToken } });
  return tokenData;
};

const findToken = async (refreshToken) => {
  const tokenData = await Token.findOne({ where: { refreshToken } });
  return tokenData;
};

module.exports = {
  generateTokens, validateAccessToken, validateRefreshToken, saveToken, removeToken, findToken,
};
