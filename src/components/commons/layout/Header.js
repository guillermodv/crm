import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary " style={{'height':'60px'}}>
                <img src="../../../../logo.png"  style={{'width':'50px', 'border':'1px solid white'}} alt="..."/>
                <nav className="navbar navbar-light">
                    <span className="navbar-brand mb-0 h1">
                        CRM-CARMOCAL
                    </span>
                </nav>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
    
                <div className="collapse navbar-collapse" id="navbarColor01">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <Link to={'/accounts'} className="nav-link">
                                Cuentas
                            </Link>
                        </li>
                    </ul>
                    <form className="form-inline ml-auto">
                        <div className="md-form my-0">
                            <input className="form-control" type="text" placeholder="Search" aria-label="Search"/>
                        </div>
                        <button href="#!" className="btn btn-outline-white btn-md my-0 ml-sm-2 text-white" type="submit">Busquedas
                        </button>
                    </form>
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <a href="#!" className="nav-link">
                                {"usuario@usuario.com"}
                            </a>
                        </li>

                        <li className="nav-item">
                            <button
                                type="button"
                                className="btn btn-danger"
                                onClick={null}
                            >
                                Cerrar Sesión
                            </button>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default Header;