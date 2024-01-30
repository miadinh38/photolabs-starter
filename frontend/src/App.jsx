import React, { useState } from "react";

import HomeRoute from "routes/HomeRoute";
import "./App.scss";
import topics from "mocks/topics";
import photos from "mocks/photos";
import { FavoriteProvider } from "./components/FavoriteContext";
import PhotoDetailsModal from "routes/PhotoDetailsModal";
import useApplicationData from "hooks/useApplicationData";

// Note: Rendering a single component to build components in isolation
const App = () => {
  
  const {
    state,
    favPhotoAdded,
    favPhotoRemoved,
    selectPhoto,
    displayPhotoDetails,
    closeModal,
  } = useApplicationData();

  console.log("State", state);

  return (
    <FavoriteProvider>
      <div className="App">
        <HomeRoute  
          photos={photos} 
          topics={topics} 
          openModal={displayPhotoDetails} 
        />
        {state.isPhotoDetailsModalOpen && (
          <PhotoDetailsModal
            photos={photos}
            closeModal={closeModal}
            selectedPhoto={state.selectedPhoto}
          />
        )}
      </div>
    </FavoriteProvider>
  );
};

export default App;
