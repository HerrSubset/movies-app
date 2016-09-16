import "angular";
import "angular-route";
import { appConfig } from "./app.config";
import { MyMoviesController } from "./my-movies/my-movies.controller";
import { MoviesSearchController } from "./movies-search/movies-search.controller";
import { MoviesDetailsController } from "./movies-details/movies-details.controller";
import { MoviesSearchLocalController } from "./movies-search-local/movies-search-local.controller";
import { MovieService } from "./shared/movie.service";
// import { MoviesAddController } from "./contacts-add/contacts-add.controller";

import { MoviesCollectionComponent } from "./shared/movies-collection/movies-collection.component";



export default angular.module("moviesApp", ["ngRoute"])
        .config(appConfig)
        .constant("apiUrl", "http://angularcoursebackend.azurewebsites.net/api")
        .controller("MyMoviesController", MyMoviesController)
        .controller("MoviesSearchController", MoviesSearchController)
        .controller("MoviesSearchLocalController", MoviesSearchLocalController)
        .controller("MoviesDetailsController", MoviesDetailsController)
        .service("MovieService", MovieService)
        .component("moviesCollection", MoviesCollectionComponent)
        .name;