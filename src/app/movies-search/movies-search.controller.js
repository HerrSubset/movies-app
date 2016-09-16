export class MoviesSearchController {
    constructor(MovieService) {
        this.title = "Search";
        this.actionText = "Save Movie"
        this.movies = [];
        this.MovieService = MovieService;
    }

    searchMovie(movie) {
        this.MovieService.getOnlineMovies(movie.title).then((result) => {
            this.movies = result;
        });
    }

    addMovie(selectedMovie) {
        this.MovieService.storeMovie(selectedMovie.imdbId);
    }
}