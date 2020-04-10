import React, { Component } from 'react'
import menu from '../assets/CSS/menu.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';


class Menu extends Component {
  render() {
    return (

      <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3  border-bottom shadow-sm container" id="Nav">
        <img className="p-1 m-3" src="https://steemitimages.com/0x0/https://steemitimages.com/DQmRkbnDTp31zuVpkVuf6WPkU64Dab16WH8wS11BWRn51NA/Desarrollo-web.gif" width="80" height="80" alt="Logo" /> 
        <h1 className="my-0 mr-md-auto text-white font-weight-normal">Angélica María Jiménez Villa</h1>
        <nav className="my-2 my-md-0 mr-md-3  md-3 nav-link">
          <a className="p-2 text-white" href="#profile-link">Contact</a>
          <a className="p-2 text-white" href="#about">Profile</a>
          <a className="p-2 text-white" href="#education">Education</a>
          <a className="p-3 text-white active" href="#projects"><span>Projects</span></a>
        </nav>

      </div >
    );
  }
}

export default Menu;