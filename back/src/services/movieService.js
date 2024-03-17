// movieService.js
const axios = require('axios');

module.exports = {
    getMovies: async () => {
        try {
            const response = await axios.get('https://students-api.up.railway.app/movies');
            return response.data; // Devolver los datos de películas obtenidos de la API
        } catch (error) {
            console.error('Error al obtener las películas:', error);
            throw error; // Propagar el error para que sea manejado por el controlador
        }
    }
};
