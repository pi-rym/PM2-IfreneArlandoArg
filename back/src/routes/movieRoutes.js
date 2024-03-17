// movieRoutes.js
const express = require('express');
const router = express.Router();
const moviesController = require('../controllers/moviesControllers');

router.get('/', moviesController.getMovies);

module.exports = router;
