const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

//ROUTERs
const indexRouter = require('./routes/indexRouter');
const productsRouter=require('./routes/productsRouter');
const productsCartRouter = require('./routes/productsCartRouter');
// const usersRouter = require('./routes/usersRouter');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//a Router
app.use('/', indexRouter);
app.use('/productTypeList', productsRouter);
app.use('/productDetails', productsRouter);
app.use('/productCart', productsCartRouter);
app.use('/productCreate', productsRouter);
// app.use('/productEdit', productsRouter); OJO! HAY QUE HACERLO
//app.use('/login', usersRouter);
//app.use('/register', usersRouter);



// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
