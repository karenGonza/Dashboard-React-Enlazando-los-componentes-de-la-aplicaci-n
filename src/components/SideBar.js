import React from 'react';
import image from '../assets/images/logo-DH.png';
import { Link } from 'react-router-dom'; 

function SideBar(){
    return(
        <React.Fragment>
            {/*<!-- Sidebar -->*/}
            <ul className="navbar-nav bg-gradient-secondary sidebar sidebar-dark accordion" id="accordionSidebar">

                {/*<!-- Sidebar - Brand -->*/}
                <a className="sidebar-brand d-flex align-items-center justify-content-center" href="/">
                    <div className="sidebar-brand-icon">
                        <img className="w-100" src={image} alt="Digital House"/>
                    </div>
                </a>

                {/*<!-- Divider -->*/}
                <hr className="sidebar-divider my-0"/>

                {/*<!-- Nav Item - Dashboard -->*/}
                <li className="nav-item active">
                    <Link className="nav-link" to="/">
                        <i className="fas fa-fw fa-tachometer-alt"></i>
                        <span>Dashboard - DH movies</span></Link>
                </li>

                {/*<!-- Divider -->*/}
                <hr className="sidebar-divider"/>

                {/*<!-- Heading -->*/}
                <div className="sidebar-heading">Actions</div>

                {/*<!-- Nav Item - Metrics -->*/}
                <li className="nav-item">
                    <Link className="nav-link collapsed" to="/metricas">
                        <i className="fas fa-fw fa-folder"></i>
                        <span>Métricas</span>
                    </Link>
                </li>

                {/*<!-- Nav Item - LastMovie -->*/}
                <li className="nav-item">
                    <Link className="nav-link" to="/pelicula">
                        <i className="fas fa-fw fa-chart-area"></i>
                        <span>Última pelicula</span></Link>
                </li>

                {/*<!-- Nav Item - Genres -->*/}
                <li className="nav-item">
                    <Link className="nav-link" to="/generos">
                        <i className="fas fa-fw fa-table"></i>
                        <span>Generos</span></Link>
                </li>

                {/*<!-- Nav Item - Tables -->*/}
                <li className="nav-item">
                    <Link className="nav-link" to="/peliculas">
                        <i className="fas fa-fw fa-table"></i>
                        <span>Películas</span></Link>
                </li>

                {/*<!-- Divider -->*/}
                <hr className="sidebar-divider d-none d-md-block"/>
            </ul>
            {/*<!-- End of Sidebar -->*/}
            
        </React.Fragment>
    )
}
export default SideBar;

/* Linea 26, cambio la etiqueta a por el Link, dentro de la etiqueta 
cambio el href por el to, para poner el enlace hacia ese elemento que quiero ver, y arriba ya hará la importación */