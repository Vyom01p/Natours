const express = require('express');
const viewsConrtoller = require('../controllers/viewsController');
const authController = require('../controllers/authController');
const router = express.Router();

router.get('/', viewsConrtoller.getOverview);
router.get('/tour/:slug', authController.protect, viewsConrtoller.getTour);

// /login
router.get('/login', viewsConrtoller.getLoginForm);
module.exports = router;
