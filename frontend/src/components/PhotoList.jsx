import React, { useState } from "react";

import PhotoListItem from "./PhotoListItem";
import "../styles/PhotoList.scss";

const PhotoList = ({photos, toggleFavorite, favoritePhotos, openModal, onOpenModal}) => {
  
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
        openModal={openModal}
        onOpenModal={onOpenModal}
      />
      )))}
    </ul>
  );
};

export default PhotoList;
