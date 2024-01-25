import React, { useState } from "react";

import PhotoListItem from "./PhotoListItem";
import "../styles/PhotoList.scss";

const PhotoList = ({photos, toggleFavorite, favoritePhotos}) => {
  const [ selectedPhotoId, setSelectedPhotoId ] = useState(null);

  const handleOpenModal = (photoId) => {
    setSelectedPhotoId(photoId)
  };

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
        onOpenModal={handleOpenModal}
      />
      )))}
    </ul>
  );
};

export default PhotoList;
