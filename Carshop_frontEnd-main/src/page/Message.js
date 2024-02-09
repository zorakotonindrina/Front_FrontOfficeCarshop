import React from 'react'
import NavBar from "../composant/NavBar";
import Footer from '../composant/Footer';
import ListeMessage from '../composant/ListeMessage';

function Message() {
  return (
    <div>
      <NavBar/> 
        <ListeMessage/>
        <Footer/>
    </div>
  )
}

export default Message