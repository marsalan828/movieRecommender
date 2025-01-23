import MovieCard from "../components/MovieCard";

function Home(){
    const movies =[
        {id:1 ,title:"john Wick", date:"2020"},
        {id:2 ,title:"Terminator", date:"2021"},
        {id:3 ,title:"The Matrix", date:"2022"},
        {id:4 ,title:"El Pachino", date:"2023"},
    ]

    return (
        <div className="Home">
            <div className="movies-grid">
                {movies.map((movie) => (
                    <MovieCard movie={movie} key={movie.id}/>
                ))}
            </div>
        </div>
    );
}

export default Home;