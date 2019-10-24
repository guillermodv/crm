import React, {Fragment} from 'react';
import {isEmpty} from 'lodash';
import {Link} from "react-router-dom";
import {LoadingIndicator, Title} from "../commons";
import {accounts} from "../../const"
import AccountTable from "./AccountList";

const AccountsList = () => (
    <Fragment>
        <Title label="Clientes"/>
        <div className="text-right col-md-12 mb-12">
            <Link to="/account/new" className="btn btn-primary pull-right">
                <i className="fas fa-plus"></i> {''}
                Nuevo Cliente
            </Link>
        </div>
        {isEmpty(accounts) && (<LoadingIndicator/>)}
        {!isEmpty(accounts) && (<AccountTable accounts={accounts}/>)}
    </Fragment>
);

export default AccountsList;

