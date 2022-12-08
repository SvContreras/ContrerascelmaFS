import React from 'react';
import 'sitio_transportes/frontend/src/styles/components/layout/Nav.css'
import {NavLink} from 'react-router-dom';

const Nav = (props) => {
    return (
        <nav>
            <div>
                <ul>
                    <li><NavLink activeClassName= "activo" exact to="/">Home</NavLink></li>
                    <li><NavLink activeClassName= "activo" exact to="/nosotros">Nosotros</NavLink></li>
                    <li><NavLink activeClassName= "activo" exact to="/novedades">novedades</NavLink></li>
                    <li><NavLink activeClassName= "activo" exact to="/contactos">Contactos</NavLink></li>
                </ul>
            </div>
        </nav>
    );
}

export default Nav;


