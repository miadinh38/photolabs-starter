import React, {useState} from 'react';

import PhotoList from 'components/PhotoList';
import TopNavigation from 'components/TopNavigationBar';

import '../styles/HomeRoute.scss';

const HomeRoute = ({ topics, photos, toggleFavorite, favoritePhotos, openModal, closeModal }) => {
  // Check if favoritePhotos is defined before accessing its length
  const isFavPhotoExist = favoritePhotos && favoritePhotos.length > 0;
  const [ selectedPhoto, setSelectedPhoto ] = useState(null);

  const handleOpenModal = (photoId) => {
    const selectedPhoto = photos.find((photo) => photo.id === photoId);
    setSelectedPhoto(selectedPhoto);
    openModal();
  };
  
  return (
    <div className="home-route">
      <TopNavigation topics={topics} isFavPhotoExist={isFavPhotoExist}/>
      <PhotoList 
        photos={photos}
        toggleFavorite={toggleFavorite}
        favoritePhotos={favoritePhotos}
        openModal={openModal}
        onOpenModal={handleOpenModal}
        closeModal={closeModal}
      />
    </div>
  );
};

export default HomeRoute;
