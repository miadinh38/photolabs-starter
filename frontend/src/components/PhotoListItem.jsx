import React from "react";

import "../styles/PhotoListItem.scss";

const PhotoListItem = (props) => {

  const { imageSource, profile, username, location } = props.sampleDataForPhotoListItem;

  return (
    <>
    <img src={imageSource}/>
    <img src={profile}/>
    <p>{username}</p>
    <p>{location.city}, {location.country}</p>
    </>
  )

};

export default PhotoListItem;
