

function addCarouselItem(title, imageSrc) {
    // Create carousel item
    let carouselItem = document.createElement("div");
    carouselItem.classList.add("carousel-item");

    // Create image element
    let image = document.createElement("img");
    image.src = imageSrc;
    image.classList.add("d-block", "mx-auto", "h-400"); // Add mx-auto class to center the image
    image.alt = title + " Image";

    carouselItem.appendChild(image);
    

    // Get the carousel inner container and append the carousel item
    let carouselInner = document.querySelector(".carousel-inner");
    carouselInner.appendChild(carouselItem);
}



// Assuming addCarouselItem is a function that adds items to a carousel
async function fetchDataAndPopulateCarousel() {
  try {
    
    const response = await axios.get('https://students-api.2.us-1.fl0.io/movies');

    // Assuming the response.data is an array of movie data
    const movieDataArray = response.data;

    // Iterate through the movie data and add items to the carousel
    movieDataArray.forEach((movieData) => {
      addCarouselItem(movieData.title, movieData.poster);
    });
  } catch (error) {
    console.error('Error fetching data:', error.message);
  }
}


fetchDataAndPopulateCarousel();



