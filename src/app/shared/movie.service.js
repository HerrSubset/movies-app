/*@ngInject*/
class MovieService {
    constructor($http, apiUrl) {
        this.$http = $http;
        this.apiUrl = apiUrl;
    }

    getOnlineMovies(title) {
        return this.$http.get(`${this.apiUrl}/Movies/online?title=${title}`).then((response) => {
            return response.data;
        });
    }

    getCatalogMovies(title) {
        return this.$http.get(`${this.apiUrl}/Movies/collection?title=${title}`).then((response) => {
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

    getCatalogMovie(id) {
        return this.$http.get(`${this.apiUrl}/Movies/${id}`).then((response) => {
            return response.data;
        });
    }

    removeCatalogMovie(id) {
        return this.$http.delete(`${this.apiUrl}/Movies/${id}`).then( () => {
            Materialize.toast('Movie Deleted', 2000);
        }, () => {
            Materialize.toast('Movie could not be deleted', 2000);
        });
    }
}


export default MovieService;