import React from "react";
import ListInLine from "../components/ListInLine";
import ListInProgress from "../components/ListInProgress";
import "../styles/homePage.scss";

const HomePage: React.FC = () => {
  return (
    <div className="homepage">
      <div>
        <h3 className="list-name">Очередь заказов</h3>
        <ListInLine />
      </div>
      <div>
        <h3 className="list-name">Производство</h3>
        <ListInProgress />
      </div>
    </div>
  );
};

export default HomePage;
