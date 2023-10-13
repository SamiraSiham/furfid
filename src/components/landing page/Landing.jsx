import React from 'react'
import Header from './Header';
import Navbar from './Navbar';
import Hero from './Hero';
import AnimalCards from './AnimalCards';
import About from './About';
import Avantages from './Avantages';
import EspaceVet from './EspaceVet';
import Services from './Services';
import Devis from './Devis';
import Contact from './Contact';
import Footer from './Footer';
const Landing = () => {
  return (
    <div>
        <Header/>
        <Navbar/>
        <Hero/>
        <AnimalCards/>
        <About/>
        <Avantages/>
        <EspaceVet/>
        <Services/>
        <Devis/>
        <Contact/>
        <Footer/>
    </div>
  )
}

export default Landing