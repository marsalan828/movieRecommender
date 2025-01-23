import '../App.css';
import heart from "../assets/heart.png";

function MovieCard ({movie}){
    const handleFavBtn = () => {
        alert("fav button clicked");
    }
    return (
        <div className="movie-card">
             <div className='movie-img'>
                <img src={movie.src} alt={movie.title} />
                <div className="movie-overlay">
                    <button className="fav-btn" onClick={handleFavBtn}><img src={heart} className='fav-btn-img' /></button>
                </div>
             </div>
             <div className='movie-desc'>
                <h3>{movie.title}</h3>
                <p>{movie.date}</p>
             </div>
        </div>
    )
}

export default MovieCard;