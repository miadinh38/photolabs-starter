import React from "react";
import PhotoFavButton from "./PhotoFavButton";

import "../styles/PhotoListItem.scss";

const PhotoListItem = ({ imageSource, profile, username, location }) => {

  return (
    <div className='photo-list__item'>
      <img className='photo-list__image' src={imageSource}/>

      <div className='photo-list__user-details'>
        <img className='photo-list__user-profile' src={profile}/>      

        <div className='photo-list__user-info'>
          <p>{username}</p>
          <p className='photo-list__user-location'>{location.city}, {location.country}</p>
        </div>
      </div>

      <PhotoFavButton />

    </div>
  )

};

export default PhotoListItem;
