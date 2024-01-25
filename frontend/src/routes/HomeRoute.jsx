import React from 'react';

import PhotoList from 'components/PhotoList';
import TopNavigation from 'components/TopNavigationBar';

import '../styles/HomeRoute.scss';

const HomeRoute = ({ topics, photos, toggleFavorite, favoritePhotos }) => {
  return (
    <div className="home-route">
      <TopNavigation topics={topics}/>
      <PhotoList 
        photos={photos}
        toggleFavorite={toggleFavorite}
        favoritePhotos={favoritePhotos}
      />
    </div>
  );
};

export default HomeRoute;
