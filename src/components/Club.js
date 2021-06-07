import React from "react";
import "../stylesheets/App.css";

const Club = (props) => {
  const renderMembers = () => {
    return props.item.members.map((member, index) => {
      return <li key={index}>{member}</li>;
    });
  };

  return (
    <article>
      <h2>{props.item.name}</h2>
      <h4>Members:</h4>
      <ul>{renderMembers()}</ul>
    </article>
  );
};

export default Club;
