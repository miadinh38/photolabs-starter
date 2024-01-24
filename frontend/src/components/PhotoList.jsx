import React from "react";

import PhotoListItem from "./PhotoListItem";
import "../styles/PhotoList.scss";

const PhotoList = (props) => {
  return (
    <ul className="photo-list">
      {props.photos.map((data => (
      <PhotoListItem key={data.id} {...data}/>
      )))}
    </ul>
  );
};

export default PhotoList;
