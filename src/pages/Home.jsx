// render the component and create a search 
// functionality to search for the movies in realtime 

import React,{ useState,useEffect } from 'react';
import MovieCard from '../components/MovieCard';
import { getMovies } from '../services/api';
import axios from 'axios';

function Home() {
    const [movies, setMovies] = useState([]);
    const [searchVal, setSearchVal] = useState("");
    const [filteredMovies, setFilteredMovies] = useState([]);
    const [err, setErr] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect( () => {
        const fetchMovies = async () => {
            try {
                const data = await getMovies();
                setMovies(data);
                setFilteredMovies(data);
            } catch (err) {
                setErr(err);
            } finally {
                setLoading(false);
            }
        };
        fetchMovies();
    }, []);

    const handleSearch = (e) => {
        setSearchVal(e.target.value.trimStart());
    }

    useEffect(() => {
        setFilteredMovies(
            movies.filter(movie => movie.title.toLowerCase().includes(searchVal.toLowerCase()))
        );    
    }, [searchVal]);
    
    return (
      <>
        <input
          type="text"
          className="search-movies"
          placeholder="Search for movies..."
          onChange={handleSearch}
          value={searchVal}
            />
            {err && <div className='display-error'>{err}</div>}
            {
                loading ? <div className='loading'>Loading...</div> :
                <div className="movie-list">
                    {filteredMovies.map((movie) => (
                        <MovieCard movie={movie} key={movie.id} />
                    ))}
                </div>
            }
      </>
    );
}

export default Home;