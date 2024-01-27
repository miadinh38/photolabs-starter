import React from "react";
import PhotoFavButton from "./PhotoFavButton";

import "../styles/PhotoListItem.scss";


const PhotoListItem = ({ id, urls, user, location, similar_photos, toggleFavorite, favoritePhotos, openModal }) => {
  const handleClick = () => {
    openModal({id, urls, user, location, similar_photos});
  }

  return (
    <div className='photo-list__item'>
      <PhotoFavButton 
        toggleFavorite={toggleFavorite}
        favoritePhotos={favoritePhotos}
        photoId={id}
      />
      <img className='photo-list__image' src={urls.regular} alt="photo" onClick={handleClick}/>

      <div className='photo-list__user-details'>
        <img className='photo-list__user-profile' src={user.profile} alt="Profile"/>      

        <div className='photo-list__user-info'>
          <span>{user.name}</span><br></br>
          <span className='photo-list__user-location'>{location.city}, {location.country}</span>
        </div>
      </div>
    </div>
  )

};

export default PhotoListItem;
