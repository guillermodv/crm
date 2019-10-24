import React, {Fragment} from 'react';
import {find} from 'lodash';
import {accounts} from "../../const";
import AccountCard from "./AccountCard";
import {Link} from "react-router-dom";
import Submenu from "./Submenu";

const Account = (props)  => {
    const id = props.match.params.id;
    const account = find(accounts, a => a._id === id);
    return (
        <Fragment>
            <Submenu/>
            <div className="container mt-2">
                <div className="row">
                    <div className="col-sm-6 py-2">
                        <h5> {account.name} </h5>
                    </div>
                    <div className="col-sm-6 text-right">
                        <Link to="/accounts" className="btn btn-secondary">
                            <i className="fas fa-arrow-circle-left"></i> {''}
                            Volver Al Listado
                        </Link>
                        {' '}
                        <Link to={`/account/edit/${account._id}`} className="btn btn-primary">
                            <i className="fas fa-pencil-alt"></i> {''}
                            Editar Cuenta
                        </Link>
                    </div>
                </div>
            </div>
            <hr className="mx-1 w-100"/>
            <AccountCard account={account}/>
        </Fragment>
    );
};

export default Account;