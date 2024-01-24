import React from "react";

import "../styles/TopicList.scss";
import TopicListItem from "./TopicListItem";
import topics from "mocks/topics";

const TopicList = (props) => {
  return (
    <div className="top-nav-bar__topic-list">
      {props.topics.map(data => (
        <TopicListItem key={data.id} {...data}/>
      ))}
    </div>
  );
};

export default TopicList;
