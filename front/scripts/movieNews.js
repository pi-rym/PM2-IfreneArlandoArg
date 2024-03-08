

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

// Assuming the API response returns an array of movie objects with properties like title, poster, and genre
$.get("https://students-api.2.us-1.fl0.io/movies", (data) => {
    data.forEach((movieData) => {  
        addCarouselItem(movieData.title, movieData.poster);
    });
});
