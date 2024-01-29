import React, { useState } from "react";

import HomeRoute from "routes/HomeRoute";
import "./App.scss";
import topics from "mocks/topics";
import photos from "mocks/photos";
import { FavoriteProvider } from "./components/FavoriteContext";
import PhotoDetailsModal from "routes/PhotoDetailsModal";
import useApplicationData from "components/hooks/useApplicationData";

// Note: Rendering a single component to build components in isolation
const App = () => {

  // const [ displayModal, setDisplayModal ] = useState(false);
  // const [ selectedPhoto, setSelectedPhoto ] = useState(null);


  // const openModal = (photo) => {
  //   setSelectedPhoto(photo);
  //   setDisplayModal(true);
  // }

  // const closeModal= () => {
  //   setDisplayModal(false);
  // }

  const {
    state,
    updateToFavPhotoIds,
    setPhotoSelected,
    onClosePhotoDetailsModal,
    onPhotoSelect,
  } = useApplicationData();

  return (
    <FavoriteProvider>
      <div className="App">
        <HomeRoute photos={photos} topics={topics} openModal={onPhotoSelect} />
        {state.isPhotoDetailsModalOpen && (
          <PhotoDetailsModal
            photos={photos}
            closeModal={onClosePhotoDetailsModal}
            selectedPhoto={state.selectedPhoto}
          />
        )}
      </div>
    </FavoriteProvider>
    
  );
};

    // <FavoriteProvider>
    //   <div className="App">
    //     <HomeRoute photos={photos} topics={topics} openModal={openModal}/>
    //     {displayModal && <PhotoDetailsModal photos={photos} closeModal={closeModal} selectedPhoto={selectedPhoto}/>}
    //   </div>
    // </FavoriteProvider>

export default App;
