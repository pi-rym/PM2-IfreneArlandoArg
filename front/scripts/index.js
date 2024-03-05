console.log(tempData);

// Function to create a movie card
function createMovieCard(title, year, director, duration, genre, rate, poster) {
    // Create elements
    let card = document.createElement("a");
    card.href = "#";
    card.classList.add("card");
  
    let img = document.createElement("img");
    img.src = poster;
    img.alt = title + " Poster";
  
    let h2 = document.createElement("h2");
    h2.textContent = title;
  
    let yearP = createParagraph("Year", year);
    let directorP = createParagraph("Director", director);
    let durationP = createParagraph("Duration", duration + " mins");
    let genreP = createParagraph("Genre", genre);
    let rateP = createParagraph("Rate", rate);
  
    // Append elements to card
    card.appendChild(img);
    card.appendChild(h2);
    card.appendChild(yearP);
    card.appendChild(directorP);
    card.appendChild(durationP);
    card.appendChild(genreP);
    card.appendChild(rateP);
  
    return card;
  }
  
  // Helper function to create paragraphs for movie details
  function createParagraph(label, text) {
    let p = document.createElement("p");
    let strong = document.createElement("strong");
    strong.textContent = label + ": ";
    p.appendChild(strong);
    p.appendChild(document.createTextNode(text));
    return p;
  }
  
  // Accessing the data from tempData
  tempData.forEach((movieData) => {
    let container = document.querySelector(".container");
    let movieCard = createMovieCard(
      movieData.title,
      movieData.year,
      movieData.director,
      movieData.duration,
      movieData.genre,
      movieData.rate,
      movieData.poster
    );
  
    container.appendChild(movieCard);
  });
  