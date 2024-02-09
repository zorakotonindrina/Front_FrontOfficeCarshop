import React from 'react';
import BarChart from '../composant/BarChart';
import Header from '../composant/Header';
import Footer from '../composant/Footer';

const Satatistique = () => {
  return (
    <div>
      <Header/>
      <h1>My React Chart App</h1>
      <BarChart />
      <Footer/>
    </div>
  );
};

export default Satatistique;