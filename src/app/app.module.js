import "angular";
import "angular-route";
import { appConfig } from "./app.config";
import { MoviesListController } from "./movies-list/movies-list.controller";
import { MoviesSearchController } from "./movies-search/movies-search.controller";
// import { MoviesAddController } from "./contacts-add/contacts-add.controller";



export default angular.module("moviesApp", ["ngRoute"])
        .config(appConfig)
        .constant("apiUrl", "http://www.omdbapi.com/?")
        .controller("MoviesListController", MoviesListController)
        .controller("MoviesSearchController", MoviesSearchController)
        .name;