import React from "react";

import "../styles/TopicList.scss";
import TopicListItem from "./TopicListItem";

const TopicList = ({topics, getPhotosByTopics}) => {
  return (
    <div className="top-nav-bar__topic-list">
      {topics.map(data => (
        <TopicListItem 
          key={data.id} 
          title={data.title}
          onClick={() => getPhotosByTopics(data.id)}
        />
      ))}
    </div>
  );
};

export default TopicList;
