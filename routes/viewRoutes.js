const express = require('express');
const viewsConrtoller = require('../controllers/viewsController');
const router = express.Router();

router.get('/', viewsConrtoller.getOverview);
router.get('/tour', viewsConrtoller.getTour);
module.exports = router;
