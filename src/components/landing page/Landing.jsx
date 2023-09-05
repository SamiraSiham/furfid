import React from 'react'
import Header from './Header';
import Navbar from './Navbar';
import Hero from './Hero';
import AnimalCards from './AnimalCards';
import About from './About';
import Avantages from './Avantages';
const Landing = () => {
  return (
    <div>
        <Header/>
        <Navbar/>
        <Hero/>
        <AnimalCards/>
        <About/>
        <Avantages/>
    </div>
  )
}

export default Landing