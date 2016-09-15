export class MoviesSearchController {
    constructor($http, apiUrl) {
        this.title = "Search";
        this.movies = [];
        this.$http = $http;
        this.apiUrl = apiUrl;

        this.init();
    }

    init() {

    }

    searchMovie(movie) {
        var url = `${this.apiUrl}s=${encodeURI(movie.title)}`;
        console.log("Sending request to " + url);
        this.$http.get(url).then((response) => {
            this.movies = response.data.Search;
        });
    }
}