import React from 'react';

import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoList from 'components/PhotoList';

const PhotoDetailsModal = ({photos, urls, user, location, closeModal, selectedPhoto}) => {
  console.log('Selected Photo Details:', selectedPhoto);

  const handleCloseModal = () => {
    closeModal();
  }

  return (
    <div className="photo-details-modal">
      <button className="photo-details-modal__close-button" onClick={handleCloseModal}>
        <img src={closeSymbol} alt="close symbol"/>
      </button>

      {/* <div className="photo-details-modal__top-bar"> */}

      <div className="photo-details-modal__images">
        <img className='photo-details-modal__image' src={selectedPhoto.urls.regular} alt="photo-detail"/>
    
        <div className='photo-details-modal__photographer-details'>
        <img className='photo-details-modal__photographer-profile ' src={selectedPhoto.user.profile} alt="Profile"/>


          <span className="photo-details-modal__photographer-info">{selectedPhoto.user.name}</span><br></br>
          <span className='photo-details-modal__photographer-location'>{selectedPhoto.location.city}, {selectedPhoto.location.country}</span>
        </div>      
      </div>

      <span className='photo-details-modal__header'>Similar Photos</span>
      <PhotoList photos={photos}/>
    </div>
  )
};

export default PhotoDetailsModal;
