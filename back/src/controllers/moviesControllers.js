// moviesController.js
const movieService = require('../services/movieService');

exports.getMovies = (req, res) => {
    const message = movieService.getMoviesMessage();
    res.send(message);
};
