import React from 'react'

import NavBar from "../composant/NavBar";
import Footer from '../composant/Footer';
import Recherche from "../composant/Recherche";
import ResultatSearch from '../composant/ResultatSearch';

function Search() {
  return (
    <div>
        <NavBar/>
        <Recherche/>
        <Footer/>
    </div>
  )
}

export default Search