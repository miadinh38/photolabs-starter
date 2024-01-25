import React from 'react';

import HomeRoute from 'routes/HomeRoute';
import './App.scss';
import topics from 'mocks/topics';
import photos from 'mocks/photos';
import { FavoriteProvider } from './components/FavoriteContext';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';

// Note: Rendering a single component to build components in isolation
const App = () => {

  return (
    <FavoriteProvider>
      <div className="App">
        <HomeRoute photos={photos} topics={topics}/>
        {/* <PhotoDetailsModal /> */}
      </div>
    </FavoriteProvider>
  );
};

export default App;
