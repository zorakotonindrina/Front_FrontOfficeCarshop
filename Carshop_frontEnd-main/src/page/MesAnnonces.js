import React from 'react'
import NavBar from "../composant/NavBar";
import Footer from '../composant/Footer';
import Autre from "../composant/Autre";
import Mesannonces from '../composant/Mesannonces';

function MesAnnonces() {
  return (
    <div>
        <NavBar/>
        <Autre/>
        <Mesannonces/>
        <Footer/>
    </div>
  )
}

export default MesAnnonces