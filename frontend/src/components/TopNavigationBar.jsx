import React from "react";
import TopicList from "./TopicList";
import { useFavorite } from "./FavoriteContext";

import "../styles/TopNavigationBar.scss";
import FavBadge from "./FavBadge";

const TopNavigation = ({ topics, getPhotosByTopics }) => {
  const { favoritePhotos } = useFavorite();

  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <TopicList topics={topics} getPhotosByTopics={getPhotosByTopics}/>
      <FavBadge isFavPhotoExist={favoritePhotos.length > 0}/>
    </div>
  );
};

export default TopNavigation;
