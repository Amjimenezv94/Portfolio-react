import React, { Component } from 'react';
import  '../assets/CSS/contact.css'

class Contact extends Component {
   
    render() { 
        return ( 
            <section id="profile-link">
            <div className="icon-container text-center mb-2">
                <a className="ml-1 mr-1 p-1" href="https://twitter.com/angelicajv831"><i className="fab fa-twitter" ></i></a>
                
                <a className="ml-1 mr-1 p-1" href="https://www.linkedin.com/in/angelicamariajimenezvilla/"><i className="fab fa-linkedin-in"></i></a>
               
                <a className="ml-1 mr-1 p-1" href="ttps://github.com/Amjimenezv94"><i className="fab fa-github-alt"></i></a>
                
                <a className="ml-1 mr-1 p-1" href="https://wa.link/5rzkff"><i className="fab fa-whatsapp"></i></a>
                
            </div>
        </section>
         );
    }
}
 
export default Contact;