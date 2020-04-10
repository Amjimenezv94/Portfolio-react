import React, { Component } from 'react'
import skills from '../assets/CSS/skill.css'

class Skills extends Component {

  render() {
    return (

      <section className=" text-center" id="about">
        <div className="container pb-4">
          <h1 className="text-white mb-5">SKILLS</h1>
          <div className="row">
            <div className="col-md-4">
              <div className="main-content-left text-white">
              
                <h6>HTML5</h6>
                <progress  id="progress1" value="90" ></progress>
                <h6>Bootstrap</h6>
                <progress id="progress1" value="60" bg-warning ></progress>
                <h6>ArcGis</h6>
                <progress id="progress1" value="90" ></progress>

              </div>
            </div>

            <div className="col-md-4">
              <div className="main-content-left text-white">

                <h6>CSS3</h6>
                <progress id="progress1" value="85" ></progress>
                <h6>Python</h6>
                <progress id="progress1" value="60" ></progress>
                <h6>AutoCad</h6>
                <progress id="progress1" value="50" ></progress>

              </div>
            </div>

            <div className="col-md-4">
              <div className="main-content-left text-white">

                <h6>JavaScript</h6>
                <progress id="progress1" value="40" ></progress>
                <h6>React JS</h6>
                <progress id="progress1" value="30" ></progress>
                <h6>English</h6>
                <progress id="progress1" value="70" ></progress>

              </div>
            </div>
          </div>

        </div>



      </section>

    );
  }
}

export default Skills;