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

// const corsMiddleware = require('./middlewares/cors-middleware');

const { DEV_PORT, CLIENT_URL, SESSION_SECRET } = process.env;

 const app = express();

/*const corsOptions = {
  credentials: true,

  origin: "http://localhost:3000", // адрес сервера React
};
app.use(cors(corsOptions));

  origin: '*', // адрес сервера React
}; */


const corsOptions = {
  credentials: true,
  origin: process.env.CLIENT_URL
};  

app.use(cors(corsOptions));
// импорт роутов

const homeRoutes = require('./routes/homeRouter');
const eventRoutes = require('./routes/eventRouter')
const aboutRoutes = require('./routes/aboutRouter');

const editAboutRoutes = require('./routes/editAboutRouter');
const editHomeRoutes = require('./routes/editHomeRouter');
const editNewsRoutes = require('./routes/newsRouter');
const addEventRoutes = require('./routes/addEventRouter');


// expressMiddlewares(app);
//!
// app.use(cors());

/*   const sessionConfig = {
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

  app.use(session(sessionConfig)); */




app.use((req, res, next) => {
  res.cookie('testCookie', 'TestTestTestTestTest', { maxAge: 10000000000 });
  next();
});

// app.use((req, res, next) => {
//   console.log("\n\x1b[33m", 'req.session.user :', req.session?.user);
//   next();
// });

// Выносим порт в .env и на всякий случай подставляем дефолтный через ||

app.use(morgan('dev'));
// Чтобы наши статические файлы были видны браузеру, мы должны их подключить
app.use(express.static(path.join(__dirname, '../public/')));
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

console.log('__dirname', __dirname);

app.use(authMiddleware);
app.use(errorMiddleware);

// роутеры

app.use('/about', aboutRoutes);
app.use('/homepage', homeRoutes);
app.use('/eventpage', eventRoutes);

app.use('/admin/editabout', editAboutRoutes);
app.use('/admin/edithomepage', editHomeRoutes);
app.use('/admin/editnewspage', editNewsRoutes );
app.use('/admin/addevent', addEventRoutes);

app.use('/api', router);

app.listen(DEV_PORT, () => {
  console.log(`server started PORT: ${DEV_PORT}`);
  checkConnectDb();
});
