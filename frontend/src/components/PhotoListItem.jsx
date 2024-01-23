import React from "react";
import PhotoFavButton from "./PhotoFavButton";

import "../styles/PhotoListItem.scss";

const PhotoListItem = ({ urls, user, location }) => {

  return (
    <div className='photo-list__item'>
      <img className='photo-list__image' src={urls.regular} alt="photo"/>

      <div className='photo-list__user-details'>
        <img className='photo-list__user-profile' src={user.profile} alt="Profile"/>      

        <div className='photo-list__user-info'>
          <p>{user.name}</p>
          <p className='photo-list__user-location'>{location.city}, {location.country}</p>
        </div>
      </div>

      <PhotoFavButton />

    </div>
  )

};

export default PhotoListItem;
