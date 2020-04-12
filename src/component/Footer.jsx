import React, { Component } from 'react';
import '../assets/CSS/footer.css'

class Footer extends Component {

    render() {
        return (
            <section className=" text-center" id="footer">
                <div className="container pt-2">
                <h1 className="text-white m-4 mt-5"> SPONSORS </h1>
                <br/>
                    <div className="row">
                        <div className="col-lg-2">
                            <img className="bd-placeholder-img rounded-circle mb-4" src="https://pbs.twimg.com/profile_images/1147226420277579788/NeENo763_400x400.png" width="110" height="110" alt="..."/>
                            <br/>
                            <p><a className="btn btn-dark" href="https://www.grupobancolombia.com/wps/portal/acerca-de" role="button">Bancolombia »</a></p>
                        </div>
                        <div className="col-lg-2">
                            <img className="bd-placeholder-img rounded-circle mb-4" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcROEb3p6Pl823AU8tLzJfEIILf_6nBArhokQcV8Tz0aQrPKTwOE&usqp=CAU" width="110" height="110" alt="..."/>
                            <br/>
                            <p><a className="btn btn-dark" href="https://www.comfama.com/webinicio/Nuestra_Organizacion.asp" role="button">Comfama »</a></p>
                        </div>
                        <div className="col-lg-2">
                            <img className="bd-placeholder-img rounded-circle mb-4" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTsA4nJ0a3ZRThFg_3uAZWCmEa8TlgR_lJa7vnl9ftY04V8L23i&usqp=CAU" width="110" height="110" alt="..."/>
                            <br/>
                            <p><a className="btn btn-dark" href="https://agileinnova.wordpress.com/" role="button">Agile Innova »</a></p>
                        </div>
                        <div className="col-lg-2">
                            <img className="bd-placeholder-img rounded-circle mb-4" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQg-w3wyV5MfGUCSiCL3YjQ73uLnGsycEG81tLt5NbpDNBNOn8v&usqp=CAU" width="110" height="110" alt="..."/>
                            <br/>
                            <p><a className="btn btn-dark" href="https://www.gruposura.com/" role="button">Sura »</a></p>
                        </div>
                        <div className="col-lg-2">
                            <img className="bd-placeholder-img rounded-circle mb-4" src="https://pbs.twimg.com/profile_images/1128335908913258496/hHZklt21_400x400.png" width="110" height="110" alt="..."/>
                            <br/>
                            <p><a className="btn btn-dark" href="https://www.politecnicojic.edu.co/" role="button">Politecnico JIC »</a></p>
                        </div>
                        <div className="col-lg-2">
                            <img className="bd-placeholder-img rounded-circle mb-4" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSO-JDwDRVkxryOwBGFiiZHunjp5ZW7G_oVsqTK-2GOImSR-CNw&usqp=CAU" width="110" height="110" alt="..."/>
                            <br/>
                            <p><a className="btn btn-dark" href="https://makaia.org/es/inicio/" role="button"> Makaia »</a></p>
                        </div>
                    </div>
                                          
                        
                </div>
                <div className="inferior"> <a href="#Nav"><img src="https://static.wixstatic.com/media/2ec355_3aef23e29c284cd087d025640983d635~mv2.gif" width="30px" heigth="35px"alt=""/></a></div>
                <footer className="container p-5 text-white">
                    <p>© 2020 Angélica María Jiménez Villa  | Portafolio Web.</p>
                </footer>
            </section>

        );
    }
}

export default Footer;