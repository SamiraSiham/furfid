import React from 'react'
import Header from './Header';
import Navbar from './Navbar';
import Hero from './Hero';
import AnimalCards from './AnimalCards';
import About from './About';
import Avantages from './Avantages';
import EspaceVet from './EspaceVet';
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
    </div>
  )
}

export default Landing