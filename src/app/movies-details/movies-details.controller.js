/*@ngInject*/
class MoviesDetailsController {
    constructor($routeParams, MovieService, $location) {
        this.MovieService = MovieService;
        this.$location = $location;
        this.MovieService.getCatalogMovie($routeParams.id).then((movie) => {
            this.movie = movie;
            console.log(this.movie);
        });
    }


    removeMovie() {
        console.log("removing movie");
        console.log(this.movie);
        this.MovieService.removeCatalogMovie(this.movie.id).then(() => {
            this.$location.path("/movies");
        });
    }
}


export default MoviesDetailsController;