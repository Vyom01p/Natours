const express = require('express');
const reviewController = require('../controllers/reviewController');
const bookingController = require('../controllers/bookingController');
const authController = require('../controllers/authController');
const router = express.Router();

router.get(
  '/checkout-session/:tourId',
  authController.protect,
  bookingController.getCheckoutSession,
);

module.exports = router;
