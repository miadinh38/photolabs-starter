import React from 'react';

import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoList from 'components/PhotoList';

const PhotoDetailsModal = ({closeModal, selectedPhoto}) => {
  console.log('Selected Photo Details:', selectedPhoto);

  const handleCloseModal = () => {
    closeModal();
  }

  const similarPhotoArray = Object.values(selectedPhoto.similar_photos); // convert similar_photos obj to arr

  return (
    <div className="photo-details-modal">
      <button className="photo-details-modal__close-button" onClick={handleCloseModal}>
        <img src={closeSymbol} alt="close symbol"/>
      </button>


      <div className="photo-details-modal__images">
        <img className='photo-details-modal__image' src={selectedPhoto.urls.regular} alt="Selected Photo"/>
    
        <div className='photo-details-modal__photographer-details'>
          <img className='photo-details-modal__photographer-profile ' src={selectedPhoto.user.profile} alt="Profile"/>

          <span className="photo-details-modal__photographer-info">{selectedPhoto.user.name}</span>
          <span className='photo-details-modal__photographer-location'>{selectedPhoto.location.city}, {selectedPhoto.location.country}</span>
        </div>

        <div className="photo-details-modal__top-bar">
          <span className='photo-details-modal__header'>Similar Photos</span>
        </div>
      </div>      
      <PhotoList photos={similarPhotoArray}/>
    </div>
  )
};

export default PhotoDetailsModal;
