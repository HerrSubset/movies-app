export function appConfig($routeProvider) {
    // $routeProvider.when("/movies/add", {
    //      template: require("./movies-add/movies-add.html"),
    //      controller: "MoviesAddController",
    //      controllerAs: "ctrl"
    // });

    // $routeProvider.when("/movies/new", {
    //      template: require("./movies-add/movies-add.html"),
    //      controller: "MoviesAddController",
    //      controllerAs: "ctrl"
    // });

    // $routeProvider.when("/movies/:movieId", {
    //     template: require("./movies-details/movies-details.html"),
    //     controller: MoviesDetailsController,
    //     controllerAs: "ctrl"
    // });

    $routeProvider.when("/movies/search", {
        template: require("./movies-search/movies-search.html"),
        controller: "MoviesSearchController",
        controllerAs: "ctrl"
    });
    
    $routeProvider.when("/movies", {
        template: require("./movies-list/movies-list.html"),
        controller: "MoviesListController",
        controllerAs: "ctrl"
    });

    $routeProvider.otherwise( {
        redirectTo: "/movies"
    });
    
}