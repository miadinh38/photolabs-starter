import React from 'react';
import FavIcon from './FavIcon';

import '../styles/FavBadge.scss';

const FavBadge = ({ isFavPhotoExist }) => {
  return (
    <div className='fav-badge' style={{ pointerEvents: 'none' }}>
      <FavIcon displayAlert={!!isFavPhotoExist} selected={true}/>
    </div>
  ) 
};

export default FavBadge;