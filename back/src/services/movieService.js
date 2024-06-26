// movieService.js

const Movie = require('../models/movieSchema'); 

module.exports = {
    getMovies: async () => {
        try {
            const movies = await Movie.find(); 
            return movies; 
        } catch (error) {
            console.error('Error al obtener las películas:', error);
            throw error; 
        }
    }
};

