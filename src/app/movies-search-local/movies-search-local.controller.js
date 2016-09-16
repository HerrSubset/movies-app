export class MoviesSearchLocalController {
    constructor(MovieService) {
        this.MovieService = MovieService;
        this.movies = [];
    }

    searchMovie(movieTitle) {
        this.MovieService.getCatalogMovies(movieTitle).then((result) => {
            this.movies = result;
        });
    }
}