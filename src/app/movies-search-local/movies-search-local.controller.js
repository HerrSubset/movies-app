export class MoviesSearchLocalController {
    constructor(MovieService, $location) {
        this.$location = $location;
        this.MovieService = MovieService;
        this.movies = [];

        this.actionText = "Details";
    }

    searchMovie(movieTitle) {
        this.MovieService.getCatalogMovies(movieTitle).then((result) => {
            this.movies = result;
        });
    }

    viewMovieDetails(selectedMovie) {
        this.$location.path(`/movies/${selectedMovie.id}`)
    }
}