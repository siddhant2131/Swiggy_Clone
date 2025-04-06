import React from 'react'
import './App.css';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './Components/Navbar';
import HeroSection from './Components/HeroSection';
import EnjoyFood from './Components/Enjoyfood';




export default function App() {
  return (
    <div>  
      <Navbar/>
      <HeroSection/>
      <EnjoyFood/>
    </div>
  )
}
