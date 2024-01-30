import React, { useState, useReducer } from 'react';

const initialState = {
    favPhotoIds: [],
    selectedPhoto: null,
    isPhotoDetailsModalOpen: false,
  };

export const ACTIONS = {
  FAV_PHOTO_ADDED: 'FAV_PHOTO_ADDED',
  FAV_PHOTO_REMOVED: 'FAV_PHOTO_REMOVED',
  SET_PHOTO_DATA: 'SET_PHOTO_DATA',
  SET_TOPIC_DATA: 'SET_TOPIC_DATA',
  SELECT_PHOTO: 'SELECT_PHOTO',
  DISPLAY_PHOTO_DETAILS: 'DISPLAY_PHOTO_DETAILS',
  CLOSE_MODAL: 'CLOSE_MODAL',
}

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.FAV_PHOTO_ADDED:
      return { ...state, favPhotoIds: action.payload.newFavPhotoIds }

      case ACTIONS.FAV_PHOTO_REMOVED:
        return {...state, favPhotoIds: action.payload.newFavPhotoIds }

      case ACTIONS.SELECT_PHOTO:
        return {...state, selectedPhoto: action.payload.selectedPhoto };

      case ACTIONS.DISPLAY_PHOTO_DETAILS:
        return {...state, selectedPhoto: action.payload.selectedPhoto, isPhotoDetailsModalOpen: true };

      case ACTIONS.CLOSE_MODAL:
        return {...state, isPhotoDetailsModalOpen: false };
      
    
    default:
      throw new Error(
        `Tried to reduce with unsupported action type: ${action.type}`
      );
  }
}

const useApplicationData = () => {

  const [state, dispatch] = useReducer(reducer, initialState); 

  const favPhotoAdded = (newFavPhotoIds) => {
    dispatch({type: ACTIONS.FAV_PHOTO_ADDED, payload: {newFavPhotoIds} 
    });
  };

  const favPhotoRemoved = (newFavPhotoIds) => {
    dispatch({type: ACTIONS.FAV_PHOTO_REMOVED, payload: {newFavPhotoIds} });
  };

  const selectPhoto = (photo) => {
    dispatch({type: ACTIONS.SELECT_PHOTO, payload: {selectedPhoto: photo} });
  };

  const displayPhotoDetails = (photo) => {
    console.log("Photo", photo);
    dispatch({type: ACTIONS.DISPLAY_PHOTO_DETAILS, payload: {selectedPhoto: photo} });
  }


  const closeModal = () => {
    dispatch({type: ACTIONS.CLOSE_MODAL});
  }
  
  
  return {
    state,
    favPhotoAdded,
    favPhotoRemoved ,
    selectPhoto,
    displayPhotoDetails,
    closeModal,
  };
};

export default useApplicationData;
