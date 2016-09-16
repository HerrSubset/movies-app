/*@ngInject*/
class MoviesSearchFormController {

    search(movie) {
        console.log("searching movie");
        console.log(movie);
        console.log(this.onSearch);
        this.onSearch({
            movieTitle: movie.title
        });
    }
}


export var MoviesSearchFormComponent = {
    template: require("./movies-search-form.html"),
    controller: MoviesSearchFormController,
    bindings: {
        onSearch: "&"
    }
}