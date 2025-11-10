import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import HeroSection2 from './components/HeroSection2'
import Products from './components/Products'
import Footer from './components/Footer'


function App() {

  return (
    <>
    <Navbar />
    <HeroSection />
    <HeroSection2 />
    <Products />
    <Footer />
    </>
  )
}

export default App
