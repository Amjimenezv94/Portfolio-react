import React, { Component } from 'react'
import '../assets/CSS/carousel.css'

class Projects extends Component {

    render() {
        return (

            <div className="container" id="project">
                <h4 className="text-center text-white "><b>PROJECTS</b></h4>

                <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                    <ol className="carousel-indicators">

                        <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="4"></li>
                    </ol>

                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img className="d-block w-100" src="img/1.JPG" alt="First project" />
                            <div className="carousel-caption d-none d-md-block">
                                <h5><a className="img-link" href="https://amjimenezv94.github.io/Tribute_Page/Reto_01.html"> TRIBUTE PAGE</a>

                                </h5>

                            </div>
                        </div>
                        <div className="carousel-item">
                            <img className="d-block w-100" src="img/2.JPG" alt="Second project" />
                            <div className="carousel-caption d-none d-md-block">
                                <h5>
                                    <a className="img-link" href="https://amjimenezv94.github.io/Primer_Formulario/"> SURVEY FORM </a>
                                </h5>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img className="d-block w-100" src="img/3.JPG" alt=" Third project " />
                            <div className="carousel-caption d-none d-md-block ">
                                <h5>
                                    <a className="img-link" href="https://amjimenezv94.github.io/technical-page/">TECHNICAL PAGE</a>
                                </h5>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img className="d-block w-100" src="img/4.JPG" alt=" fourth project " />
                            <div className="carousel-caption d-none d-md-block ">
                                <h5>
                                    <a className="img-link" href="https://amjimenezv94.github.io/lading-page/">LANDING PAGE</a>
                                </h5>

                            </div>
                        </div>
                        <div className="carousel-item">
                            <img className="d-block w-100" src="img/5.JPG" alt=" fifth project/" />
                            <div className="carousel-caption d-none d-md-block ">
                                <h5> <a className="img-link" href="https://dubis78.github.io/Reto-1/">GROUP CHALLENGE N°1</a></h5>

                            </div>
                        </div>
                    </div>

                    <a className="carousel-control-prev " href="#carouselExampleControls " role="button " data-slide="prev ">
                        <span className="carousel-control-prev-icon " aria-hidden="true "></span>
                        <span className="sr-only ">Previous</span>
                    </a>
                    <a className="carousel-control-next " href="#carouselExampleControls " role="button " data-slide="next ">
                        <span className="carousel-control-next-icon " aria-hidden="true "></span>
                        <span className="sr-only ">Next</span>
                    </a>
                </div>
            </div>


        );
    }
}

export default Projects;