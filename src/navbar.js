import React, { useState } from 'react';

import './css/navbar.css'
import logo from "./assets/Wild-advisor-logo.png"
import burger from "./assets/Hamburger_icon.png"

const Navbar = () => {
    const [mobileNav, setMobileNav] = useState(false) 
    const ShowMenu = () => {
      setMobileNav(!mobileNav);
      console.log(mobileNav)
      }
    

  return (
    <header>
      <div className={`${mobileNav ? 'topnav responsive' : 'topnav'}`} id="myTopnav" >
        
          <img
            className="wild-logo"
            src={logo}
            alt="Wild advisor"
          />
        
        <a href="index.html">Accueil</a>
        <a href="place.html">Sur place</a>
        <a href="pouce.html">Sur le pouce</a>
        <a href="soif.html">J'ai soif</a>
        <a href="surprise.html">Surprends-moi</a>
        <a href="favoris.html">Favoris</a>
       
         <img
            className="burger"
            src={burger}
            alt="Hamburger icon"
            onClick={ () => ShowMenu()}
          />
       
      </div>
    </header>
  );
};

export default Navbar;