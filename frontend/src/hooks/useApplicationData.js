import React, { useState, useReducer, useEffect } from 'react';


const initialState = {
    favPhotoIds: [],
    selectedPhoto: null,
    isPhotoDetailsModalOpen: false,
    photoData: [],
    topicData: [],
  };

export const ACTIONS = {
  FAV_PHOTO_ADDED: 'FAV_PHOTO_ADDED',
  FAV_PHOTO_REMOVED: 'FAV_PHOTO_REMOVED',
  SET_PHOTO_DATA: 'SET_PHOTO_DATA',
  SET_TOPIC_DATA: 'SET_TOPIC_DATA',
  SELECT_PHOTO: 'SELECT_PHOTO',
  DISPLAY_PHOTO_DETAILS: 'DISPLAY_PHOTO_DETAILS',
  CLOSE_MODAL: 'CLOSE_MODAL',
  GET_PHOTOS_BY_TOPICS: 'GET_PHOTO_BY_TOPICS'
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

      case ACTIONS.SET_PHOTO_DATA:
        return {...state, photoData: action.payload}

      case ACTIONS.SET_TOPIC_DATA:
        return {...state, topicData: action.payload}

      case ACTIONS.GET_PHOTOS_BY_TOPICS:
        return {...state, photoData: action.payload}
      
    
    default:
      throw new Error(
        `Tried to reduce with unsupported action type: ${action.type}`
      );
  }
}

const useApplicationData = () => {

  const [state, dispatch] = useReducer(reducer, initialState); 

  useEffect(() => {
    fetch('http://localhost:8001/api/photos')
      .then(res => res.json())
      .then(data => {
        dispatch({type: ACTIONS.SET_PHOTO_DATA, payload: data})
      })
  }, [])

  useEffect(() => {
    fetch('http://localhost:8001/api/topics')
      .then(res => res.json())
      .then(data => {
        dispatch({type: ACTIONS.SET_TOPIC_DATA, payload: data})
      })
  }, [])

  const getPhotosByTopics = (id) => {
    fetch(`http://localhost:8001/api/topics/photos/${id}`)
      .then(res => res.json())
      .then(data => {
        dispatch({type: ACTIONS.GET_PHOTOS_BY_TOPICS, payload: data})
      })
  }
  
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
    getPhotosByTopics
  };
};

export default useApplicationData;
