import { useMoviesContext } from "../contexts/MovieContext";
import MovieCard from "../components/MovieCard";


function Favorities() {
    const { favourites } = useMoviesContext();
    if (favourites) {
        return (
            <>
                {favourites.map((movie) => (
                    <MovieCard movie={movie} key={movie.id} />
                ))}
            </>
        );
    } else {
        return (
            <>
                <h1>You have no favourite movies yet</h1>
            </>
        );
    }
}

export default Favorities;