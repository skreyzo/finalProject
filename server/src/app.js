require('dotenv').config();

const path = require('path');
const express = require('express');
const morgan = require('morgan');
const session = require('express-session');
const FileStore = require('session-file-store')(session);
const cookieParser = require('cookie-parser');
const cors = require('cors');
const router = require('./routers/index');

const checkConnectDb = require('../db/checkDbConnection');

const errorMiddleware = require('./middlewares/error-middleware');
const authMiddleware = require('./middlewares/auth-middleware');

const app = express();

// Выносим порт в .env и на всякий случай подставляем дефолтный через ||
const { DEV_PORT, SESSION_SECRET } = process.env;

app.use(morgan('dev'));
// Чтобы наши статические файлы были видны браузеру, мы должны их подключить
app.use(express.static(path.join(__dirname, '../public/')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cookieParser());
app.use(cors());

app.use(authMiddleware);
app.use(errorMiddleware);

app.use('/api', router);

// const sessionConfig = {
//   name: 'your coockie name', // * Название куки
//   store: new FileStore(), // * подключение стора (БД для куки) для хранения
//   secret: SESSION_SECRET ?? 'your key', // * ключ для шифрования куки
//   resave: false, // * если true, пересохраняет сессию, даже если она не поменялась
//   saveUninitialized: false, // * Если false, куки появляются только при установке req.session
//   cookie: {
//     maxAge: 1000 * 60 * 60 * 24 * 10, // * время жизни в ms (10 дней)
//     httpOnly: true, // * куки только по http
//   },
// };

// app.use(session(sessionConfig));

app.listen(DEV_PORT, () => {
  console.log(`server started PORT: ${DEV_PORT}`);
  checkConnectDb();
});
