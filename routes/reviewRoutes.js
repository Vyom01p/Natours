const express = require('express');
const reviewController = require('../controllers/reviewController');
const router = express.Router({ mergeParams: true });
const authController = require('../controllers/authController');
// console.log('--- DEBUG START ---');
// console.log('1. Protect:', authController.protect);
// console.log('2. Restrict:', authController.restrictTo('user'));
// console.log('3. Create Review:', reviewController.createReview);
// console.log('--- DEBUG END ---');
router
  .route('/')
  .get(reviewController.getAllReviews)
  .post(
    authController.protect,
    authController.restrictTo('user'),
    reviewController.createReview,
  );

module.exports = router;
