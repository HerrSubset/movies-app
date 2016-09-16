export function appConfig($routeProvider) {

    $routeProvider.when("/movies/search", {
        template: require("./movies-search/movies-search.html"),
        controller: "MoviesSearchController",
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