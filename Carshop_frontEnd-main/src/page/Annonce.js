import React from 'react'
import NavBar from "../composant/NavBar";
import ListeVoiture from '../composant/ListeVoiture';
import Footer from '../composant/Footer';
import Recherche from "../composant/Recherche";
import Autre from "../composant/Autre";


function Annonce() {
  return (
    <div>
        <NavBar/>
        <Autre/>
        <ListeVoiture/>
        <Footer/>
    </div>
  )
}

export default Annonce