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
        return {...state, selectedPhoto: action.payload.photo };

      case ACTIONS.DISPLAY_PHOTO_DETAILS:
        return {...state, isPhotoDetailsModalOpen: true };

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
    dispatch({type: ACTIONS.SELECT_PHOTO, payload: {photo} });
  };

  const displayPhotoDetails = () => {
    dispatch({type: ACTIONS.DISPLAY_PHOTO_DETAILS});
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


// //State to hold the entire application state
// const [state, setState] = useState({
//   favPhotoIds: [],
//   selectedPhoto: null,
//   isPhotoDetailsModalOpen: false,
// });

// //Action to update favorite photo IDs
// const updateToFavPhotoIds = (newFavPhotoIds) => {
//   setState((prevState) => ({
//     ...prevState,
//     favPhotoIds: newFavPhotoIds,
//   }));
// }

// //Action to set the selected photo
// const setPhotoSelected = (photo) => {
//   setState((prevState) => ({
//     ...prevState,
//     selectedPhoto: photo,
//   }));
// }

// //Action to open the photo details modal when photo is selected
// const onPhotoSelect = (photo) =>  {
//   setPhotoSelected(photo),
  
//   setState((prevState) => ({
//     ...prevState,
//     isPhotoDetailsModalOpen: true,
//   }));
// }

// //Action to close the photo details modal
// const onClosePhotoDetailsModal = () =>  {
//   setState((prevState) => ({
//     ...prevState,
//     isPhotoDetailsModalOpen: false,
//   }));
// }


// return {
//   state,
//   updateToFavPhotoIds,
//   setPhotoSelected,
//   onClosePhotoDetailsModal,
//   onPhotoSelect,
// };