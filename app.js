const express = require('express');
const morgan = require('morgan');
const mongoSanitize = require('express-mongo-sanitize');
const xss = require('xss-clean');
const rateLimit = require('express-rate-limit');
const hpp = require('hpp');
const helmet = require('helmet');
const AppError = require('./utils/appError');
const globalErrorHandler = require('./controllers/errorController');
const tourRouter = require('./routes/tourRoutes');
const userRouter = require('./routes/userRoutes');
const reviewRouter = require('./routes/reviewRoutes');
const app = express();
//1) GLOBAL MIDDLEWARES
//Set Security HTTP Headers
app.use(helmet());
//Development logging
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}
//Limit request from same API
const limiter = rateLimit({
  max: 100,
  windowMs: 60 * 60 * 1000,
  message: 'Too many request from this IP, please try again in an hour',
});
app.use('/api', limiter);
//Body parser, reading data from body into req.body
app.use(express.json({ limit: '10kb' }));

//Data Sanitization against NoSQL query injection
app.use(mongoSanitize());
//Data Sanitization XSS
app.use(xss());
//Prevent paramter pollution
app.use(
  hpp({
    whitelist: [
      'duration',
      'ratingsQuantity',
      'maxGroupSize',
      'ratingsAverage',
      'difficulty',
      'price',
    ],
  }),
);
//Serving static files
app.use(express.static(`${__dirname}/public`));
// app.use((req, res, next) => {
//   console.log('Hello Haru from the middleware');
//   next();
// });

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  console.log(req.headers);
  next();
});

//2) ROUTE HANDLERS

// app.get('/api/v1/tours', getAllTours);
// app.get('/api/v1/tours/:id', getTour);
// app.post('/api/v1/tours', createTour);
// app.patch('/api/v1/tours/:id', updateTour);
// app.delete('/api/v1/tours/:id', deleteTour);

//3) ROUTES

// const userRouter = express.Router();

app.use('/api/v1/tours', tourRouter);
app.use('/api/v1/users', userRouter);
app.use('/api/v1/reviews', reviewRouter);
app.all('*', (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on the server!`, 404));
});

app.use(globalErrorHandler);

//4) SERVER
module.exports = app;
