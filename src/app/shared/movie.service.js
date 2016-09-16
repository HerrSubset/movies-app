export class MovieService {
    constructor($http, apiUrl) {
        this.$http = $http;
        this.apiUrl = apiUrl;
    }

    getOnlineMovies(title) {
        return this.$http.get(`${this.apiUrl}/Movies/online?title=${title}`).then((response) => {
            return response.data;
        });
    }

    getAllCatalogMovies() {
        return this.$http.get(`${this.apiUrl}/Movies`).then((response) => {
            return response.data;
        });
    }

    storeMovie(id) {
        var postObject = {
            imdbId: id
        };

        console.log("posting: ");
        console.log(postObject);

        this.$http.post(`${this.apiUrl}/Movies`, postObject).then( () => {
            Materialize.toast('Movie Saved', 2000);
        }, () => {
            Materialize.toast('Saving movie failed', 2000);
        });
    }
}