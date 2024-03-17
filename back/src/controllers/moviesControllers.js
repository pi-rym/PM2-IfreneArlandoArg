// moviesController.js
const movieService = require('../services/movieService');

module.exports = {
    getMovies: async (req, res) => {
        try {
            const movies = await movieService.getMovies();
            res.json(movies);
        } catch (error) {
            console.error('Error al obtener las películas:', error);
            res.status(500).send('Error al obtener las películas');
        }
    }
};
