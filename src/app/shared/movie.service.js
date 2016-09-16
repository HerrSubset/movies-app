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
}