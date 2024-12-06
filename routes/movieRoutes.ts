const router = require('express').Router();
const { getRecommendedMovie } = require('../controllers/movieController');
const checkKey = require('../middleware/authMiddleware');

// Define the route
router.get('/movies/:movieId/recommendations', checkKey, getRecommendedMovie);

module.exports = router;
