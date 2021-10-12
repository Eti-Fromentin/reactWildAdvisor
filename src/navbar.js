import './css/navbar.css'
import logo from "./assets/Wild-advisor-logo.png"

const Navbar = () => {
  return (
    <header>
      <div className="topnav" >
        
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
            src="../assets/Hamburger_icon.png"
            alt="Hamburger icon"
          />
        
      </div>
    </header>
  );
};

export default Navbar;