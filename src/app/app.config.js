/*@ngInject*/
function appConfig($routeProvider) {

    $routeProvider.when("/movies/search", {
        template: require("./movies-search-local/movies-search-local.html"),
        controller: "MoviesSearchLocalController",
        controllerAs: "ctrl"
    });

    $routeProvider.when("/movies/add", {
        template: require("./movies-search/movies-search.html"),
        controller: "MoviesSearchController",
        controllerAs: "ctrl"
    });

    $routeProvider.when("/movies/:id", {
        template: require("./movies-details/movies-details.html"),
        controller: "MoviesDetailsController",
        controllerAs: "ctrl"
    });
    
    $routeProvider.when("/movies", {
        template: require("./my-movies/my-movies.html"),
        controller: "MyMoviesController",
        controllerAs: "ctrl"
    });

    $routeProvider.otherwise( {
        redirectTo: "/movies"
    });
    
}

export default appConfig;