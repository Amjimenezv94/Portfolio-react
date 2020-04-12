import React, { Component } from 'react';
import '../assets/CSS/carousel.css';
import tribute from '../img/tribute.JPG';
import survey from '../img/survey.JPG';
import technical from '../img/technical.JPG';
import landing from '../img/landing.JPG';
import group from '../img/group.JPG';





class Carousel extends Component {

    render() {
        return (
            <section className=" text-center" id="projects">
                
                <div className="container p-5 pb-3">
                <h4 className="text-white welcome "><small><strong>PROJECTS</strong></small></h4>
                    <div className="carousel">
                        <div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel">
                            <ol className="carousel-indicators">
                                <li data-target="#carouselExampleCaptions" data-slide-to="0" className="active"></li>
                                <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
                                <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
                                <li data-target="#carouselExampleCaptions" data-slide-to="3"></li>
                                <li data-target="#carouselExampleCaptions" data-slide-to="4"></li>
                            </ol>
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                <a className="img-link text-white" href="https://amjimenezv94.github.io/Tribute_Page/Reto_01.html"> <img src={tribute} className="d-block w-100" target="black" alt="First project" /></a>
                                    <div className="carousel-caption d-none d-md-block rounded">
                                        <h5><a className="img-link text-white" href="https://amjimenezv94.github.io/Tribute_Page/Reto_01.html"> <mark>SHOW ME MORE</mark></a>
                                        </h5>

                                    </div>
                                </div>
                                <div className="carousel-item">
                                <a className="img-link text-white" href="https://amjimenezv94.github.io/Primer_Formulario/"> <img src={survey} className="d-block w-100" target="black" alt="Second project" /></a>
                                    <div className="carousel-caption d-none d-md-block">
                                        <h5><a className="img-link text-white" href="https://amjimenezv94.github.io/Primer_Formulario/"> <mark>SHOW ME MORE</mark> </a>
                                        </h5>

                                    </div>
                                </div>

                                <div className="carousel-item">
                                <a className="img-link text-white" href="https://amjimenezv94.github.io/technical-page/"> <img src={technical} className="d-block w-100" target="black" alt="third project" /> </a>
                                    
                                    <div className="carousel-caption d-none d-md-block">
                                        <h5><a className="img-link text-white" href="https://amjimenezv94.github.io/technical-page/"> <mark>SHOW ME MORE</mark></a>
                                        </h5>

                                    </div>
                                </div>
                                <div className="carousel-item">
                                <a className="img-link text-white" href="https://amjimenezv94.github.io/lading-page/"><img src={landing} className="d-block w-100" target="black" alt="Fourth project" /></a>
                                    
                                    <div className="carousel-caption d-none d-md-block">
                                        <h5><a className="img-link text-white" href="https://amjimenezv94.github.io/lading-page/"><mark>SHOW ME MORE</mark></a>
                                        </h5>

                                    </div>
                                </div>
                                <div className="carousel-item">
                                <a className="img-link text-white" href="https://dubis78.github.io/Reto-1/"> <img src={group} className="d-block w-100" target="black" alt="fifth project" /></a>
                                    <div className="carousel-caption d-none d-md-block">
                                        <h5><a className="img-link text-white" href="https://dubis78.github.io/Reto-1/"><mark>SHOW ME MORE</mark></a>
                                        </h5>

                                    </div>
                                </div>
                            </div>
                            <a className="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="sr-only">Previous</span>
                            </a>
                            <a className="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="sr-only">Next</span>
                            </a>
                        </div>
                    </div>
                </div>
            </section>

        );
    }
}

export default Carousel;