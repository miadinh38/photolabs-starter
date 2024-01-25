import React, { createContext, useContext, useState } from 'react';

//create a context object that will be used to share state across components
const FavoriteContext = createContext(); 

export const FavoriteProvider = ({ children })=> {

  const [ favoritePhotos, setFavoritePhotos ] = useState([]); //hold an array of photo ID that the user has favorited.

  const toggleFavorite = (photoId) => {
    setFavoritePhotos((prevFavPhotos) => {
      if(prevFavPhotos.includes(photoId)) {
        return prevFavPhotos.filter((id) => id !== photoId);
      } else {
        return [...prevFavPhotos, photoId];
      }
    });
  };

  return (
    <FavoriteContext.Provider value={{ favoritePhotos, toggleFavorite }}>
      {children}
    </FavoriteContext.Provider>  
  );
};

export const useFavorite = () => {
  return useContext(FavoriteContext);
}

