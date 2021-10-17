import React from "react";
import shops from "./shops-infos";

import Card from "./cards";
import "./css/cardContainer.css";

const CardContainer = ({ id }) => {
  let elt = [];
  for (let i = 0; i < shops.length; i++) {
    if (id === "restaurant" && shops[i].category.includes("restaurant")) {
      elt.push(<Card shop={shops[i]} />);
    } else if (id === "boire" && shops[i].category.includes("boire")) {
      elt.push(<Card shop={shops[i]} />);
    } else if (id === 'snacking' && shops[i].category.includes('snacking')) {
      elt.push(<Card shop={shops[i]} />);
    } else if (id === 'favoris' && shops[i].name === localStorage.getItem(shops[i].id)) {
      elt.push(<Card shop={shops[i]} />);
    } 
  }

  return (
    <div className="CardContainer">
      <h1 className="title" id={id}>
        Sur Place
      </h1>
      <main>{elt}</main>
    </div>
  );
};

export default CardContainer;
