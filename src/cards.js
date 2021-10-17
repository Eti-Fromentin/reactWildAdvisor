import React, { useState } from "react";
import { createGlobalStyle } from "styled-components";
import { Favorite, FavoriteBorderOutlined } from '@material-ui/icons';



import "./css/cards.css";
// import shops from "./shops-infos";

const Card = ({shop}) => {
  const [cardOpen, setCardOpen] = useState(false);
  const OpenCard = () => {
    setCardOpen(!cardOpen);
  };

  const GlobalStyle = createGlobalStyle`
.avis-enseigne {
  --rating: ${shop.ratings};
}`;

  const [isFavorite ,setIsFavorite ] = useState(shop.name === localStorage.getItem(shop.id));
  const isFavoriteHeart = isFavorite ? <Favorite /> : <FavoriteBorderOutlined />;
  const SetFavorite =  () => {
    setIsFavorite(!isFavorite)
      !isFavorite ? localStorage.setItem(shop.id, shop.name) : localStorage.removeItem(shop.id);
      
  }

  return (
    <div className="card">
      <GlobalStyle />
      <div className="card-header">
        <div className="card-img"></div>
        <img
          src={shop.picture}
          alt={shop.pictureAlt}
          className="image-enseigne"
        />
        <div className="trajet">{shop.trajet} Min</div>
        <div id={`setFavBtn${shop.id}`} className="material-icons favButton" onClick={() => SetFavorite()}>
          {isFavoriteHeart}
        </div>
      </div>
      <div
        id={`cardBody${shop.id}`}
        className={`${cardOpen ? "card-body  card-body-closed" : "card-body"}`}
      >
        <div className="nom-enseigne">{shop.name}</div>
        <div className="style-enseigne">{shop.style}</div>
        <div className="prix-enseigne">{shop.price_range}</div>
        <div className="avis-enseigne"></div>
        <div className="maps-enseigne">
          <a
            className="material-icons"
            href={shop.urlItineraire}
            target="_blank"
            rel="noreferrer noopener"
          >
            
          </a>
        </div>
        <button
          id={`btnOpen${shop.id}`}
          className="material-icons btn-open-card"
          onClick={() => OpenCard()}
        >
          
        </button>
      </div>
      <div
        id={`descriptEnseigne${shop.id}`}
        className={`${
          cardOpen ? "descript-enseigne desc-open" : "descript-enseigne"
        }`}
      >
        <div className="descript-text">{shop.description}</div>
        <div className="descript-coord">
          {shop.coordonnees} <br /> {shop.phone}
        </div>
        <button
          id={`btnClose${shop.id}`}
          className="material-icons btn-close-card"
          onClick={() => OpenCard()}
        >
          
        </button>
      </div>
    </div>
  );
};

export default Card;
