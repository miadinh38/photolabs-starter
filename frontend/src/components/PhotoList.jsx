import React from "react";

import PhotoListItem from "./PhotoListItem";
import "../styles/PhotoList.scss";

const PhotoList = ({photos, toggleFavorite, favoritePhotos}) => {
  return (
    <ul className="photo-list">
      {photos.map((data => (
      <PhotoListItem 
        key={data.id} 
        id={data.id}
        urls={data.urls}
        location={data.location}
        user={data.user}
        toggleFavorite={toggleFavorite}
        favoritePhotos={favoritePhotos}
      />
      )))}
    </ul>
  );
};

export default PhotoList;
