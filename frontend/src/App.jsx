import React, { useState } from "react";

import HomeRoute from "routes/HomeRoute";
import "./App.scss";
import { FavoriteProvider } from "./components/FavoriteContext";
import PhotoDetailsModal from "routes/PhotoDetailsModal";
import useApplicationData from "hooks/useApplicationData";

// Note: Rendering a single component to build components in isolation
const App = () => {
  
  const {
    state,
    favPhotoAdded,
    favPhotoRemoved,
    displayPhotoDetails,
    closeModal,
    getPhotosByTopics
  } = useApplicationData();

  return (
    <FavoriteProvider>
      <div className="App">
        <HomeRoute  
          photos={state.photoData}
          topics={state.topicData} 
          getPhotosByTopics={getPhotosByTopics}
          openModal={displayPhotoDetails} 
        />
        {state.isPhotoDetailsModalOpen && (
          <PhotoDetailsModal
            photos={state.photoData}
            closeModal={closeModal}
            selectedPhoto={state.selectedPhoto}
          />
        )}
      </div>
    </FavoriteProvider>
  );
};

export default App;
