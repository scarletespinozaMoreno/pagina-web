import React from 'react';
import {withRouter} from 'react-router-dom';
import img4 from '../images/img4.jpg'
import img3 from '../images/img3.jpg'
import img2 from '../images/img2.jpg'
import imgequipo1 from '../images/equipo1.jpg'
import imgequipo2 from '../images/equipo2.jpg'
import imgequipo3 from '../images/equipo3.jpg'
import conciencia1 from '../images/p.jpg'
import conciencia2 from '../images/p2.jpg'
import conciencia3 from '../images/p3.jpg'
import modulo1 from '../images/modulo1.jpg'
import modulo2 from '../images/modulo2.jpg'
import modulo3 from '../images/modulo3.jpg'
import modulo4 from '../images/modulo4.jpg'



const Home = () => {
    return (
        <>
        <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
        
            <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>

            <div className="carousel-inner">
            <div className="carousel-item active" data-bs-interval="10000">
            
                <img src={img4} className="d-block w-100" alt="..."/>
                <div className="hero">
                <h1>Bienvenido a Con Ciencia</h1>
                <p>Some representative placeholder content for the first slide.</p>
                </div>
            </div>
            <div className="carousel-item" data-bs-interval="2000">
                <img src={img3}  className="d-block w-100" alt="..."/>
                <div className="hero">
                <h1>Cónocenos</h1>
                <p>Some representative placeholder content for the second slide.</p>
                </div>
            </div>
            <div className="carousel-item">
                <img src={img4} className="d-block w-100" alt="..."/>
                <div className="hero">
                <h1>Visita nuestra plataforma</h1>
                <p>Some representative placeholder content for the third slide.</p>
                </div>
            </div>
            </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      
      <section ClassName= " container marketing " id="quienesSomos" name="nuestroEquipo">
         <h1 ClassName="" id= "tituloEquipo" > Nuestro Equipo</h1>
              <div className="row mt-2">
                <div className="col-lg-4 ">
                  <img className="rounded-circle mb-3" src={imgequipo1} alt="" width="140" height="140"/>
                  <h2>Andrea Galarza</h2>
                  <p>Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna.</p>
                 
                </div>
                <div className="col-lg-4">
                  <img className="rounded-circle  mb-3" src={imgequipo2} alt="" width="140" height="140"/>
                  <h2>Beatriz Sánchez</h2>
                  <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh.</p>
                  
                </div>
                <div className="col-lg-4">
                  <img className="rounded-circle  mb-3" src={imgequipo3} alt="" height="140"/>
                  <h2> Roberto Macías </h2>
                  <p>Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula porta felis euismod semper. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>
                  
                </div>
              </div>
      </section>

      <section  id="proyecto">
         <h1 ClassName="" id= "tituloConCiencia"> Con Ciencia </h1>
               <div className="card mb-5 mx-auto" >
                <div className="row g-0 d-flex justify-content-center mx-auto align-items-center">
                  <div className="col-md-4">
                    <img src={conciencia1}  className="img-fluid rounded-start" alt="..."/>
                  </div>
                  
                  <div className="col-md-8 ">
                    <div className="card-body">
                      <h2 className="card-title">¿Qué es?</h2>
                      <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. 
                      This content is a little bit longer.</p>
                      <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                    </div>
                  </div>
                </div>
              </div>


              <div className="card mb-3 mx-auto" >
                <div className="row g-0 d-flex justify-content-center mx-auto align-items-center">
                 
                  <div className="col-md-8">
                    <div className="card-body">
                      <h2 className="card-title">Objetivos</h2>
                      <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. 
                      This content is a little bit longer.</p>
                      <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                    </div>
                  </div>
                  <div className="col-md-4 ">
                    <img src={conciencia2}  className="img-fluid rounded-start " alt="..."/>
                  </div>
                </div>
              </div>

      </section>
      
      <section  className = "container-fluid justify-content-center  "id="inicioModulos"> 
         <h1 ClassName="" id= "tituloModulos"> Módulos del curso</h1>
         <div className="abs-center">
         <div className="row row-cols-1 row-cols-md-3 g-4  mx d-flex  align-items-center">
            <div className="col ">
              <div className="card ml-5 bg-white" id="card1">
                <img src={modulo1}className="card-img-top img-fluid" alt="..."/>
                <div className="card-body">
                  <h3 className="card-title">Animales</h3>
                  <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card bg-white" id="card1">
                <img src={modulo2} className="card-img-top img-fluid"  alt="..."/>
                <div className="card-body">
                  <h3 className="card-title">Ecología</h3>
                  <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card " id="card1">
                <img src={modulo3} className="card-img-top img-fluid" alt="..."/>
                <div className="card-body">
                  <h3 className="card-title">Alimentación</h3>
                  <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card "id="card1" >
                <img src={modulo4} className="card-img-top img-fluid" alt="..."/>
                <div className="card-body">
                  <h3 className="card-title">Geografía</h3>
                  <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                </div>
              </div>
            </div>
          </div>
          </div>
      </section>



      <section className="mb-4 container-fluid justify-content-center">

            <h2 className="h1-responsive font-weight-bold text-center my-4">Contact us</h2>

            <p className="text-center w-responsive mx-auto mb-5">Do you have any questions? Please do not hesitate to contact us directly. Our team will come back to you within
                a matter of hours to help you.</p>

            <div className="row">

            
                <div className="col-md-9 mb-md-0 mb-5">
                    <form id="contact-form" name="contact-form">

                      
                        <div className="row">

                      
                            <div className="col-md-6">
                                <div className="md-form mb-0">
                                    <input type="text" id="name" name="name" className="form-control"/>
                                    <label id="name" className="">Your name</label>
                                </div>
                            </div>
                          

                        
                            <div className="col-md-6">
                                <div className="md-form mb-0">
                                    <input type="text" id="email" name="email" className="form-control"/>
                                    <label id="email" className="">Your email</label>
                                </div>
                            </div>
                            

                        </div>
                        
                        <div className="row">
                            <div className="col-md-12">
                                <div className="md-form mb-0">
                                    <input type="text" id="subject" name="subject" className="form-control"/>
                                    <label id="subject" className="">Subject</label>
                                </div>
                            </div>
                        </div>
                        

                        <div className="row">

                          
                            <div className="col-md-12">

                                <div className="md-form">
                                    <textarea type="text" id="message" name="message" rows="2" className="form-control md-textarea"></textarea>
                                    <label id="message">Your message</label>
                                </div>

                            </div>
                        </div>
                      

                    </form>

                    <div className="text-center text-md-left">
                        <a className="btn btn-primary" href="/" >Send</a>
                    </div>
                    <div className="status"></div>
                </div>
                
                <div className="col-md-3 text-center">
                    <ul className="list-unstyled mb-0">
                        <li><i className="fas fa-map-marker-alt fa-2x"></i>
                            <p>San Francisco, CA 94126, USA</p>
                        </li>

                        <li><i className="fas fa-phone mt-4 fa-2x"></i>
                            <p>+ 01 234 567 89</p>
                        </li>

                        <li><i className="fas fa-envelope mt-4 fa-2x"></i>
                            <p>contact@mdbootstrap.com</p>
                        </li>
                    </ul>
                </div>

             </div>
        </section>


      
      </> 
    )
}

export default withRouter(Home)
