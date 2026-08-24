const express = require('express');
const viewsConrtoller = require('../controllers/viewsController');
const authController = require('../controllers/authController');
const router = express.Router();

router.use(authController.isLoggedIn);

router.get('/', viewsConrtoller.getOverview);
router.get('/tour/:slug', viewsConrtoller.getTour);

// /login
router.get('/login', viewsConrtoller.getLoginForm);
module.exports = router;
