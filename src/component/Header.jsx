import React, { Component } from 'react'
import header from '../assets/CSS/header.css'
import Angel from '../assets/img/Angel.JPG'
import Contact from './Contact.jsx'

class Header extends Component {
  render() {
    return (
      <section className=" text-center" id="about">
                <div className="container p-1">
                    <h1 className="text-white welcome mt-2">WELCOME TO MY PORTFOLIO</h1>
                    <p className="lead text-white mx-5">Geologist engineer & Web developer</p>
                    <div className="col-lg-12">
                            <img className="bd-placeholder-img rounded-circle m-3" src={Angel} width="150" height="150" alt="Angelica Maria Jimenez Villa "/>
                            <br/>
                            <p> <blockquote className="text-white text-center "> 'Stay Hungry Stay Foolish' <br/> by <br/>Steve Jobs </blockquote></p>
                        </div>
                        <Contact/>
                </div>
                <br/>
                
                <hr/>
            </section>
    );
  }
}

export default Header; 