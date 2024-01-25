import React from 'react';

import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';

const PhotoDetailsModal = ({closeModal, selectedPhoto}) => {
  console.log('Selected Photo Details:', selectedPhoto);

  const handleCloseModal = () => {
    closeModal();
  }

  return (
    <div className="photo-details-modal">
      <button className="photo-details-modal__close-button" onClick={handleCloseModal}>
        <img src={closeSymbol} alt="close symbol"/>
      </button>
    </div>
  )
};

export default PhotoDetailsModal;
