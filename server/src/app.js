
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

const expressMiddlewares = require('./middlewares/expressMiddlewares')

const errorMiddleware = require('./middlewares/error-middleware');
const authMiddleware = require('./middlewares/auth-middleware');

const app = express();
// импорт роутов

const homeRoutes = require('./routes/homeRouter');
const aboutRoutes = require('./routes/aboutRouter');
const newsRoutes= require('./routes/newsRouter');


expressMiddlewares(app);

// app.use((req, res, next) => {
//   console.log("\n\x1b[33m", 'req.session.user :', req.session?.user);
//   next();
// });

//роутеры
app.use('/admin/edithomepage', homeRoutes);
app.use('/about', aboutRoutes);
app.use('/admin/editnewspage', newsRoutes )











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

app.listen(DEV_PORT, () => {
  console.log(`server started PORT: ${DEV_PORT}`);
  checkConnectDb();
});
