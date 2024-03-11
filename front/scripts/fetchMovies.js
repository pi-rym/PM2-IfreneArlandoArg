//const axios = require("axios");

let data;

const fetchMovies = async () => {
    try {
        data = await axios.get("https://students-api.2.us-1.fl0.io/movies");
         console.log(data.data);
    } catch (error) {
        console.log(error.message);;
    }
}

fetchMovies();



