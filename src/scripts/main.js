const movieFactory = (movie) => {
    return `
    <section class="movies>
    <h4>Title: ${movie.title}</h4>
    <h5>Date: ${movie.yearReleased}</h5>
    </section>
    `
}





const getMovies = () => {

    const movieURL = "http://localhost:8088/movies"

    fetch(movieURL)
        .then(response => response.json())
        .then(renderedMovies => {
            renderedMovies.forEach(movie => {
                console.log(movie)
            }
            )
        
    const movieContainer = document.querySelector("#movie-container")
    const addMovieToDom = (movieHTML) => {
        movieContainer.innerHTML += movieHTML
    }
    const convertToHTML = movieFactory(movie)
    addMovieToDom(convertToHTML)
})
};



getMovies()