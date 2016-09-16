export class MyMoviesController {
    constructor(MovieService) {
        this.title = "My Movies";
        MovieService.getAllCatalogMovies().then((movies) => {
            this.movies = movies;
        });
        this.init();
    }

    init() {

    }
}