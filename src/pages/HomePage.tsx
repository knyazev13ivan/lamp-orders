import React from "react";
import ListInLine from "../components/ListInLine";
import ListInProgress from "../components/ListInProgress";
import "../styles/homePage.scss";

const HomePage: React.FC = () => {
  return (
    <div className="homepage">
      <ListInLine />
      <ListInProgress />
    </div>
  );
};

export default HomePage;
