const express = require('express');
const cors = require('cors')
const morgan = require('morgan');
const path = require('path');
const session = require('express-session');
const FileStore = require('session-file-store')(session);
const app = express();

const expressMiddlewares = (app) => {
  app.use(express.static(path.resolve('public')));
  app.use(morgan('dev'));
  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());

  const corsOptions = {
    credentials: true,
    origin: 'http://localhost:3000' // адрес сервера React
  }
  app.use(cors(corsOptions));

  const sessionConfig = {
    name: 'sid',
    store: new FileStore({}),
    secret: process.env.COOKIE_SECRET, // ключ для шифрования cookies // require('crypto').randomBytes(10).toString('hex')
    resave: false,
    saveUninitialized: false,
    cookie: {
      secure: process.env.NODE_ENV === 'production', // В продакшне нужно "secure: true" для работы через протокол HTTPS
      maxAge: 1000 * 60 * 60 * 24 * 10,
    },
  }
  

  app.use(session(sessionConfig));
}

module.exports = expressMiddlewares;
