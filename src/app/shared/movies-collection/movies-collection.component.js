class MoviesCollectionController {
    constructor() {

    }

    selected(movie) {
        this.onSelected({
            selectedMovie: movie,
        });
    }
}


export var MoviesCollectionComponent = {
    template: require("./movies-collection.html"),
    controller: MoviesCollectionController,
    bindings: {
        movies: "<",
        actionText: "<",
        onSelected: "&"
    }
}