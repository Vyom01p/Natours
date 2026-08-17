const express = require('express');
const reviewRouter = require('./../routes/reviewRoutes');
const tourController = require('./../controllers/tourController');
const authController = require('./../controllers/authController');

const router = express.Router();

// router.param('id', tourController.checkID);

router
  .route('/top-5-cheap')
  .get(tourController.aliasTopTours, tourController.getAllTours);

router.route('/tour-stats').get(tourController.getTourStats);

router.route('/monthly-plan/:year').get(tourController.getMonthlyPlan);

router
  .route('/')
  .get(authController.protect, tourController.getAllTours)
  .post(tourController.createTour);

router
  .route('/:id')
  .get(tourController.getTour)
  .patch(tourController.updateTour)
  .delete(
    authController.protect,
    authController.restrictTo('admin', 'lead-guide'),
    tourController.deleteTour,
  );

//POST/tour/2345d4/reviews
//GET/tour/2345d4/reviews
//GET/tour/2345d4/reviews/0749298sd
router.use('/:tourId/reviews', reviewRouter);

module.exports = router;
