import React from "react";

import "../styles/PhotoDetailsModal.scss";
import closeSymbol from "../assets/closeSymbol.svg";
import PhotoList from "components/PhotoList";
import PhotoFavButton from "components/PhotoFavButton";

const PhotoDetailsModal = ({ closeModal, selectedPhoto, favoritePhotos, toggleFavorite }) => {
  // Check if selectedPhoto exists
  if (!selectedPhoto) {
    return null;
  }

  const handleCloseModal = () => {
    closeModal();
  };

  // convert similar_photos obj to arr
  const similarPhotoArray = selectedPhoto && selectedPhoto.similar_photos ? Object.values(selectedPhoto.similar_photos) : [] ; 

  return (
    <div className="photo-details-modal">
      <button
        className="photo-details-modal__close-button"
        onClick={handleCloseModal}
      >
        <img src={closeSymbol} alt="close symbol" />
      </button>
      

      <div className="photo-details-modal__images">
      <PhotoFavButton 
        favoritePhotos={favoritePhotos} 
        toggleFavorite={toggleFavorite}
        photoId={selectedPhoto.id}
      />
        <img
          className="photo-details-modal__image"
          src={selectedPhoto.urls.regular}
          alt="Selected Photo"
        />

        <div className="photo-details-modal__photographer-details">
          <img
            className="photo-details-modal__photographer-profile "
            src={selectedPhoto.user.profile}
            alt="Profile"
          />

          <div className="photo-details-modal__photographer-info">
            <span>{selectedPhoto.user.name}</span>
            <span className="photo-details-modal__photographer-location"> {selectedPhoto.location.city}, {selectedPhoto.location.country}</span>
          </div>
        </div>

        <div className="photo-details-modal__top-bar">
          <span className="photo-details-modal__header">Similar Photos</span>
        </div>
        
      </div>
      
      <div className="photo-details-modal__similar-photos-container">
        <PhotoList
          favoritePhotos={favoritePhotos} 
          toggleFavorite={toggleFavorite} 
          photos={similarPhotoArray} 
        />
      </div>
    </div>
  );
};

export default PhotoDetailsModal;
