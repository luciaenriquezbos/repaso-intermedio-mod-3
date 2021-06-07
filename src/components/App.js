import React from "react";
import "../stylesheets/App.css";
import data from "../data/clubs.json";
import ClubList from "./ClubList";

const App = () => {
  return (
    <>
      <h1>Mis Clubs</h1>
      <ClubList list={data} />
    </>
  );
};

export default App;
