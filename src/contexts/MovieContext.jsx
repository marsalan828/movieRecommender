import { Children, createContext, useContext, useEffect, useState } from "react";
import Favorities from "../pages/Favorites";

// First step is to create a context
const MovieContext = createContext();

// Second we create a useContext function to export to our app
export const useMoviesContext = () => useContext(MovieContext);

// Create the context for useContext function now
// This will provide states to any of the components wrapped inside it

// We will use "children" as a prop. This is a reserved prop when you 
// write a component and children is anything that is inside the component 
export const MovieProvider = ({ children }) => {
    const [favourites, setFavourites] = useState([]);
    
    // favorites are present in the local storage
    useEffect(() => {
        const isFavorites = localStorage.getItem("favourites")

        if (isFavorites) setFavourites(JSON.parse(isFavorites));
    },[]);

    // when localstorage is not set
    useEffect(() => {
        localStorage.setItem('favorites', JSON.stringify(favourites))
    },[favourites]);

    // operation to add to favourites
    const addToFavorites = (movie) => {
        // set the previous values in the setter function and push the new movie inside that array
        setFavourites(prev => [...prev, movie]);
        
    }
    // operation to remove favorites
    const removeFromFavorites = (movieId) => {
        setFavourites(prev=>prev.filter(movie=>movie.id !== movieId));
    }
    // operation to return favorite movie
    const isFavorites = (movieId) => {
        return favourites.some(movie=>movie.id == movieId);
    }

    // providing the values to the children
    const values = {
        favourites,
        addToFavorites,
        removeFromFavorites,
        isFavorites
    }
    return <MovieContext.Provider value={values}>
        {children}
    </MovieContext.Provider>
}