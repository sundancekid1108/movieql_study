let movies = [{
        id: 0,
        name: "star wars",
        score: 44
    },
    {
        id: 1,
        name: "star wars2",
        score: 45
    },
    {
        id: 2,
        name: "star wars3",
        score: 46
    },
    {
        id: 3,
        name: "star wars4",
        score: 47
    }
]

export const getMovies = () => movies

export const getById = (id) => {
    const filteredMovies = movies.filter(movie => movie.id === id)
    return filteredMovies[0]
}

export const deleteMovie = id => {
        const cleanedMovies = movies.filter(movie => movie.id !== id)
        if (movies.length > cleanedMovies.length) {
            movies = cleanedMovies
            return true
        } else {
            return false
        }
    } // delete한 ID를 제외한 나머지것들을 모음..

export const addMovie = (name, score) => {
    const newMovie = {
        id: movies.length + 1,
        name,
        score
    }

    movies.push(newMovie)
    return newMovie
}