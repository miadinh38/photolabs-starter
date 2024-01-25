import React from "react";

import "../styles/TopicList.scss";
import TopicListItem from "./TopicListItem";

const TopicList = ({topics}) => {
  return (
    <div className="top-nav-bar__topic-list">
      {topics.map(data => (
        <TopicListItem 
          key={data.id} 
          title={data.title}
        />
      ))}
    </div>
  );
};

export default TopicList;
