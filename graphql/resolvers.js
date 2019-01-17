/*Query를 처리하는것 (Resolve) */
import { getMovies } from "./db"

const resolvers = {
    Query: {
        movies: () => getMovies()
    }

}

export default resolvers