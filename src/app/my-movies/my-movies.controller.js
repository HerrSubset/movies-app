export class MyMoviesController {
    constructor(MovieService, $location) {
        this.title = "My Movies";
        this.actionText = "Details";
        this.MovieService = MovieService;
        this.MovieService.getAllCatalogMovies().then((movies) => {
            this.movies = movies;
        });
        this.$location = $location;
        this.init();
    }

    init() {

    }

    showDetails(selectedMovie) {
        this.$location.path(`/movies/${selectedMovie.id}`)
    }
}