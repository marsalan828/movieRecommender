import '../App.css';
import heart from "../assets/heart.png";

function MovieCard({ movie }) {
    const imgUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
    const handleFavBtn = () => {
        alert("fav button clicked");
    }
    return (
        <div className="movie-card">
             <div className='movie-img'>
                <img className="movie-poster" src={imgUrl} alt={movie.title} />
                <div className="movie-overlay">
                    <button className="fav-btn" onClick={handleFavBtn}><img src={heart} className='fav-btn-img' /></button>
                </div>
             </div>
             <div className='movie-desc'>
                <h3>{movie.title}</h3>
                <p>{movie.release_date?.split("-")[0]}</p>
             </div>
        </div>
    )
}

export default MovieCard;