import React from "react";
import Club from "./Club";
import "../stylesheets/App.css";

const ClubList = (props) => {
  const clubItems = props.list.map((item, index) => {
    return (
      <li key={index}>
        <Club item={item} />
      </li>
    );
  });

  return <ul>{clubItems}</ul>;
};

export default ClubList;
