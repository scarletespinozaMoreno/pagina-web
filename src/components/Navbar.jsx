import React from 'react';
import {withRouter} from 'react-router-dom';
const Navbar = (props) => {
    return (
    <>
         <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top ">
            <div className="container-fluid">    
                <a className="navbar-brand" href="/">Con-Ciencia</a> 
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav  mx-auto   ">
                        <li className="nav-item active">
                             <a className="nav-link active" aria-current="page" href="/">Inicio</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#tituloEquipo">Equipo</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#tituloConCiencia">Proyecto</a>
                        </li>
                        
                        <li className="nav-item">
                            <a className="nav-link" href="#tituloModulos">Módulos</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">Contáctanos</a>
                        </li>
                        
                    </ul>
                    
                </div>
            </div>
         </nav>
    </>


    );
}
export default withRouter(Navbar)