import React from 'react';
import {Link} from "react-router-dom";

const Submenu = () =>(
    <nav className="navbar navbar-expand-lg navbar-light bg-light" style={{'height':'40px', 'border-bottom-right-radius': '10px', 'border-bottom-left-radius': '10px'}}>
        <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
                <li className="nav-item active">
                    <Link to={'/accounts'} className="nav-link">
                        Principal
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to={'/accounts'} className="nav-link">
                        Eventos
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to={'/accounts'} className="nav-link">
                        Contactos
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to={'/accounts'} className="nav-link">
                        Información
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to={'/accounts'} className="nav-link">
                        Oportunidades
                    </Link>
                </li>
            </ul>
        </div>
    </nav>
);

export default Submenu;