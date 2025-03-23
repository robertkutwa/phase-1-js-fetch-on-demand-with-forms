const init = () => {
    const inputForm = document.querySelector("form");
  
    inputForm.addEventListener("submit", (event) => {
      event.preventDefault(); // Prevent the form from submitting and refreshing the page
  
      // Get the input value (movie ID)
      const input = document.querySelector("input#searchByID");
      const movieId = input.value;
  
      // Fetch movie data based on the input ID
      fetch(`http://localhost:3000/movies/${movieId}`)
        .then((response) => {
          if (!response.ok) {
            throw new Error("Movie not found");
          }
          return response.json();
        })
        .then((data) => {
          // Update the DOM with the fetched movie data
          const title = document.querySelector("section#movieDetails h4");
          const summary = document.querySelector("section#movieDetails p");
  
          title.innerText = data.title;
          summary.innerText = data.summary;
        })
        .catch((error) => {
          // Handle errors (e.g., invalid ID or network issues)
          console.error("Error fetching movie data:", error);
          alert("Movie not found. Please enter a valid ID.");
        });
    });
  };
  
  // Initialize the script when the DOM is fully loaded
  document.addEventListener("DOMContentLoaded", init);