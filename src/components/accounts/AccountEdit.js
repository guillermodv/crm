import React, {Component, Fragment} from 'react';
import { Link } from 'react-router-dom';
import {find, isEmpty} from "lodash";
import {accounts} from "../../const";

class AccountEdit extends Component {

    handleChange = ({target: {name, value}}) => {
        //this.props.onChange({[name]: value});
        console.log({[name]: value});
        this.setState({
            [name] : value
        })
    };

    render() {
        console.log('state', this.state);
        const id = this.props.match.params.id;
        const account = !isEmpty(id) ? find(accounts, a => a._id === id) : {};
        return (
            <Fragment>
                <div className="container mt-2">
                    <div className={"row"}>
                        <div className={"col-6"}>
                            <h4><i className="fas fa-book"></i> {isEmpty(id) ? ' Nueva Cuenta' : ' Editar Cuenta'}.</h4>
                        </div>
                        <div className={"col-sm-6 text-right"}>
                            <Link to="/" className="btn btn-secondary">
                                <i className="fas fa-arrow-circle-left"></i> {''}
                                Volver a Cuentas
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="col-12">
                    <div className="row justify-content-center">
                        <div className="col-md-8 mt-5">
                            <form onSubmit={() => null}>
                                <div className="form-group">
                                    <label>Cuenta:</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="name"
                                        placeholder="Nombre de la Cuenta"
                                        required
                                        value={account.name}
                                        onChange={e => this.handleChange(e)}
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Ranking:</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="ranking"
                                        placeholder="Ranking"
                                        required
                                        value={account.ranking}
                                        onChange={e => this.handleChange(e)}
                                    />
                                </div>

                                <div className="form-group">
                                    <label>Potencial:</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="potential"
                                        placeholder="Potencial"
                                        required
                                        value={account.potential}
                                        onChange={e => this.handleChange(e)}

                                    />
                                </div>

                                <div className="form-group">
                                    <label>Tipo:</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="type"
                                        placeholder="Tipo"
                                        required
                                        value={account.type}
                                        onChange={e => this.handleChange(e)}
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Servicio:</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="service"
                                        placeholder="Servicio"
                                        required
                                        value={account.service}
                                        onChange={e => this.handleChange(e)}
                                    />
                                </div>
                                <input type="submit" value="Agregar Cuenta" className="btn btn-success"/>
                                <br/>
                                <br/>
                                <br/>
                                <br/>
                            </form>
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    };
}

export default AccountEdit;


