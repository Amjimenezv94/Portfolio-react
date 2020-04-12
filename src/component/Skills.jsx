import React, { Component } from 'react';
import '../assets/CSS/progress.css';


const Progress = ({ done }) => {
  const [style, setStyle] = React.useState({});
    
    setTimeout(() => {
      const newStyle = {
        opacity: 1,
        width: `${done}%`
      }

      setStyle(newStyle);
  }, 1000);

  return(
  <div className="progress">
    <div className="progress-done" style={style}>
      {done}%
    </div>
  </div>
 )
}
   
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
                   <Progress done="70"/>
                                                     
                <h6>Bootstrap</h6>

                   <Progress done="70"/>
                
                <h6>ArcGis</h6>

                  <Progress done="90"/>

              </div>
            </div>

            <div className="col-md-4">
              <div className="main-content-left text-white">

                <h6>CSS3</h6>
                    <Progress done="80"/>  
                <h6>Python</h6>
                    <Progress done="80"/>                  
                <h6>AutoCad</h6>
                   <Progress done="70"/>           

              </div>
            </div>


            <div className="col-md-4">
              <div className="main-content-left text-white">

                <h6>JavaScript</h6>
                   <Progress done="50"/>
                <h6>React JS</h6>
                    
                    <Progress done="70"/>
                <h6>English</h6>

                    <Progress done="80"/>          

              </div>
            </div>
          </div>

        </div>



      </section>);

   
  }
}

export default Skills;