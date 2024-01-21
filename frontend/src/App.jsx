import React from 'react';

import PhotoListItem from './components/PhotoListItem';
import PhotoFavButton from 'components/PhotoFavButton';
import './App.scss';

const photos = new Array(3).fill(null).map((_, index) => ({
  id: `${index + 1}`,
  location: {
    city: "Montreal",
    country: "Canada",
  },
  imageSource: `${process.env.PUBLIC_URL}/Image-1-Regular.jpeg`,
  username: "Joe Example",
  profile: `${process.env.PUBLIC_URL}/profile-1.jpg`,
}));

// Note: Rendering a single component to build components in isolation
const App = () => {

  return (
    <div className="App">
      <PhotoFavButton />
      {photos.map((data => (
      <PhotoListItem key={data.id} {...data}/>
    )))}
    </div>
  );
};

export default App;
