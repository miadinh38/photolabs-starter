import React, { useState } from 'react';

import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import topics from 'mocks/topics';
import photos from 'mocks/photos';


const useApplicationData = () => {

  //State to hold the entire application state
  const [state, setState] = useState({
    favPhotoIds: [],
    selectedPhoto: null,
    isPhotoDetailsModalOpen: false,
  });

  //Action to update favorite photo IDs
  const updateToFavPhotoIds = (newFavPhotoIds) => {
    setState((prevState) => ({
      ...prevState,
      favPhotoIds: newFavPhotoIds,
    }));
  }

  //Action to set the selected photo
  const setPhotoSelected = (photo) => {
    setState((prevState) => ({
      ...prevState,
      selectedPhoto: photo,
    }));
  }

  //Action to open the photo details modal when photo is selected
  const onPhotoSelect = (photo) =>  {
    setPhotoSelected(photo),
    
    setState((prevState) => ({
      ...prevState,
      isPhotoDetailsModalOpen: true,
    }));
  }

  //Action to close the photo details modal
  const onClosePhotoDetailsModal = () =>  {
    setState((prevState) => ({
      ...prevState,
      isPhotoDetailsModalOpen: false,
    }));
  }


  return {
    state,
    updateToFavPhotoIds,
    setPhotoSelected,
    onClosePhotoDetailsModal,
    onPhotoSelect,
  };
};

export default useApplicationData;