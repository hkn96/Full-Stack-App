const express = require('express');
const app = express();
const expressLayouts = require('express-ejs-layouts');

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.set('layout', 'layouts/layout');
app.use(expressLayouts);
app.use(express.static('public'));

//DB connection
const mongoose = require('mongoose');
require('dotenv/config');
mongoose.connect(
  'mongodb+srv://HKN:Hi1234.@cluster0.17wr6.mongodb.net/test',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  },
  () => console.log('Connected to DB')
);

//router
const indexRouter = require('./routes/index');
app.use('/', indexRouter);

app.listen(process.env.PORT || 3000);
