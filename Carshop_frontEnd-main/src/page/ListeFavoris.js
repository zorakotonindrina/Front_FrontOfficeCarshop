import React from 'react'
import NavBar from "../composant/NavBar";
import Footer from '../composant/Footer';
import Autre from "../composant/Autre";
import Favoris from '../composant/Favoris';

function ListeFavoris() {
  return (
    <div>
        <NavBar/>
        <Autre/>
        <Favoris/>
        <Footer/>
    </div>
  )
}

export default ListeFavoris