import React, { useCallback, useState } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton() {

  const [favouritePhoto, setFavouritePhoto] = useState(false);

  const handleFavClick = () => {
    setFavouritePhoto((prevFavourite) => !prevFavourite);
  };

  return (
    <div className="photo-list__fav-icon">
      <div className="photo-list__fav-icon-svg">
        <FavIcon displayAlert={false} selected={favouritePhoto} onClick={handleFavClick}/>
      </div>
    </div>
  );
}

export default PhotoFavButton;