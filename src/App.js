import React from 'react';
import './assets/CSS/App.css';
import Menu from './component/Menu.jsx'
import Aboutme from './component/Aboutme';
import Header from './component/Header';
import Education from './component/Education';
import Projects from './component/Projects';
import Skills from './component/Skills';
import Carousel from './component/Carousel'
import Footer from './component/Footer.jsx'


function App() {
  return (
    <>
      <Menu/>
      <Header/>
      <Aboutme/>
      <Education/>
      <Skills/>
      <br/>
      <Carousel/>
      <Footer/>
     
    </>

  );
}

export default App;
