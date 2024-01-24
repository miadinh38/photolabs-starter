import React from "react";

import "../styles/TopicList.scss";
import TopicListItem from "./TopicListItem";
import topics from "mocks/topics";

const TopicList = () => {
  return (
    <div className="top-nav-bar__topic-list">
      {topics.map(data => (
        <TopicListItem key={data.id} {...data}/>
      ))}
    </div>
  );
};

export default TopicList;
