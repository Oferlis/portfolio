import React from 'react'
import { BrowserRouter } from 'react-router-dom';
import Contact from './components/Contact';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Navbar from './components/Navbar';
import About from './components/About';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <BrowserRouter>
    <main id="home" className="bg-[#EEEFF1] body-font" >
      <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&family=Roboto&display=swap" rel="stylesheet"/>
      <div className= 'flex flex-col justify-center items-center mx-auto md:w-2/3'>
        <Navbar/>
        <About/>
        <Skills/>
        <Projects/>
        <Contact/>
        <Footer/>
      </div>
    </main>
    </BrowserRouter>
  );
}

export default App;