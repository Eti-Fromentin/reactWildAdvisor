import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import './css/App.css';


import Footer from './footer';
import Navbar from './navbar';
import Homepage from './homepage';
import CardContainer from './cardContainer';

function App() {
  return (
    <div className="App">
    <Navbar />
    <CardContainer id={"restaurant"}/>
    <Footer />
    </div>
  );
}

export default App;


// Template: 

//   Homepage: 
//     <Homepage />
//     <Footer />
//   Pages:
//     <Navbar />
//     <CardContainer />
//     <Footer />


function Homepage() {
  return (
    <div>
    <Homepage />
    <Footer />
    </div>
  )
}

function Surplace() {
  return (
    <div>
      <Navbar/>
      <CardContainer id={"restaurant"}/>
      <Footer/>
    </div>
  )
}

function JaiSoif() {
  return (
    <div>
      <Navbar/>
      <CardContainer id={"boire"}/>
      <Footer/>
    </div>
  )
}

function SurlePouce() {
  return (
    <div>
      <Navbar/>
      <CardContainer id={"snacking"}/>
      <Footer/>
    </div>
  )
}

function Favorites() {
  return (<div>
    <Navbar />
    <CardContainer id={"favoris"} />
    <Footer/>
    </div>
  )
}


// function Propos() {}

// function Surprise() {}