import React from 'react';

import PhotoList from 'components/PhotoList';
import TopNavigation from 'components/TopNavigationBar';

import '../styles/HomeRoute.scss';

const HomeRoute = ({ topics, photos, toggleFavorite, favoritePhotos }) => {
  // Check if favoritePhotos is defined before accessing its length
  const isFavPhotoExist = favoritePhotos && favoritePhotos.length > 0;
  
  return (
    <div className="home-route">
      <TopNavigation topics={topics} isFavPhotoExist={isFavPhotoExist}/>
      <PhotoList 
        photos={photos}
        toggleFavorite={toggleFavorite}
        favoritePhotos={favoritePhotos}
      />
    </div>
  );
};

export default HomeRoute;
