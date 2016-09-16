/*@ngInject*/
class MoviesSearchController {
    constructor(MovieService) {
        this.title = "Search";
        this.actionText = "Save Movie"
        this.movies = [];
        this.MovieService = MovieService;
    }

    searchMovie(movieTitle) {
        this.MovieService.getOnlineMovies(movieTitle).then((result) => {
            this.movies = result;
        });
    }

    addMovie(selectedMovie) {
        this.MovieService.storeMovie(selectedMovie.imdbId);
    }
}


export default MoviesSearchController;