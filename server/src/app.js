const express = require('express');
const app = express();
require('dotenv').config();

const expressMiddlewares = require('./middlewares/expressMiddlewares')

//импорт вспомогательных ф-й
const dbCheck = require('../db/dbCheck');

// импорт роутов
const homeRoutes = require('./routes/homeRouter');

dbCheck();

expressMiddlewares(app);

app.use((req, res, next) => {
  console.log("\n\x1b[33m", 'req.session.user :', req.session?.user);
  next();
});

//роутеры
app.use('/admin/edithomepage', homeRoutes);

const PORT = process.env.PORT || 3100;
app.listen(PORT, () => {
  console.log(`Сервер запущен на http://localhost:${PORT} `);
});
