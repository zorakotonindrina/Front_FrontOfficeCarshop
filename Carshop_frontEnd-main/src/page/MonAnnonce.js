import React from 'react'
import NavBar from "../composant/NavBar";
import DetailAnnonce from '../composant/DetailAnnonce';
import Footer from '../composant/Footer';
import Recherche from "../composant/Recherche";
import Autre from "../composant/Autre";

function MonAnnonce() {
  return (
    <div>
         <NavBar/>
        <Autre/>
        <DetailAnnonce/>
        <Footer/>
    </div>
  )
}

export default MonAnnonce