import React, { useCallback, useState } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';
import { useFavorite } from './FavoriteContext';

function PhotoFavButton( {photoId} ) {

  const {favoritePhotos, toggleFavorite } = useFavorite();

  const isFavorite = favoritePhotos.includes(photoId);

  const handleFavClick = () => {
    toggleFavorite(photoId);
  };

  return (
    <div className="photo-list__fav-icon" onClick={handleFavClick}>
      <div className="photo-list__fav-icon-svg">
        <FavIcon displayAlert={false} selected={isFavorite}/>
      </div>
    </div>
  );
}

export default PhotoFavButton;