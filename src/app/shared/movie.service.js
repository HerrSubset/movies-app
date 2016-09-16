export class MovieService {
    constructor($http, apiUrl) {
        this.$http = $http;
        this.apiUrl = apiUrl;
    }

    getOnlineMovies(title) {
        return this.$http.get(`${this.apiUrl}/movies/online?title=${title}`).then((response) => {
            return response.data;
        });
    }
}