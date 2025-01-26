import '../App.css';
import heart from "../assets/heart.png";
import { useMoviesContext } from '../contexts/MovieContext';

function MovieCard({ movie }) {
    const { favourites, addToFavorites, removeFromFavorites, isFavorites } = useMoviesContext();
    const isFav = isFavorites(movie.id);

    const imgUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
    const handleFavBtn = () => {
        if (isFav) removeFromFavorites(movie.id)
        else addToFavorites(movie);
    }

    return (
      <div className="movie-card">
        <div className="movie-img">
          <img className="movie-poster" src={imgUrl} alt={movie.title} />
          <div className="movie-overlay">
            <button className="fav-btn" onClick={handleFavBtn}>
              <img
                src={heart}
                className={`fav-btn-img ${isFav ? "active" : ""}`}
              />
            </button>
          </div>
        </div>
        <div className="movie-desc">
          <h3>{movie.title}</h3>
          <p>{movie.release_date?.split("-")[0]}</p>
        </div>
      </div>
    );
}

export default MovieCard;