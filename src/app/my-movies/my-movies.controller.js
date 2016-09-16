export class MyMoviesController {
    constructor(MovieService) {
        this.title = "My Movies";
        this.MovieService = MovieService;
        this.MovieService.getAllCatalogMovies().then((movies) => {
            this.movies = movies;
        });
        this.init();
    }

    init() {

    }
}