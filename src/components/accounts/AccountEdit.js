import React, {useEffect, useState, Fragment} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { Link } from 'react-router-dom';
import {capitalize, find, isEmpty} from 'lodash';

import {
    LoadingIndicator,
    Error,
    ShowIcon,
    ShowIconWithLabel
} from "../commons";

import {requestAccount, requestSaveAccount} from "../../actions/accounts";
import {accountSchema, friendlyMessage} from "../../schema/account";
import AccountForm from "./AccountForm";
import {cuit} from "arg.js";

const AccountEdit = (props) => {
    const dispatch = useDispatch();
    const loading = useSelector(state => state.accounts.loading);
    const accountItem = useSelector(state => state.accounts.account);

    const handleChange = ({target: {name, value}}) => {
        if (name === 'cuit') {
            !cuit.isValid(value) ? setError('Cuit inválido') : setError('');
        }
        setAccount({...account, [name]: value});
    };

    const [account, setAccount] = useState(accountItem);
    const [error, setError] = useState('');

    useEffect(() => {
        if (isEmpty(account)) {
            dispatch(requestAccount(props.match.params.id));
            setAccount(accountItem);
        }
    }, [props.match.params.id, accountItem, dispatch]);

    function handleCancel() {
        setError('');
        return props.history.push('/accounts');
    }

    async function handleSubmit() {
        const valid = await accountSchema.isValid({
            name: account.name,
            socialName: account.socialName,
            industry: account.industry,
            service: account.service,
            cuit: account.cuit
        });
        if(!valid) {
            accountSchema.validate({
                name: account.name,
                socialName: account.socialName,
                industry: account.industry,
                service: account.service,
                cuit: account.cuit
            }).catch(function({errors, path}) {
                setError(`${capitalize(find(friendlyMessage, f=> f.id === path).description)}: ${errors}`);
            });
        } else {
            setError('');
            dispatch(requestSaveAccount(account));
            return props.history.push('/accounts');
        }
    }

    return(
        <Fragment>
            <div className="row col-12 mt-2 style={{'font-size': '14px'}}">
                <div className={"col-sm-6 text-left"}>
                    <h4><ShowIcon type="fas fa-pen"/>Editar Cuenta</h4>
                </div>
                <div className={"col-6 text-right"}>
                    <Link to="/accounts" className="btn btn-secondary">
                        <ShowIconWithLabel label="Volver a Cuentas" type="fas fa-arrow-circle-left2"/>
                    </Link>
                </div>
            </div>
            {loading && <LoadingIndicator/>}
            {(error !== '') && <Error label={error}/>}
            {!loading && account && <AccountForm account={account} handleChange={handleChange}/>}
            <div className="text-right mx-4">
                <button
                    disabled={error !== ''}
                    type="button"
                    className="btn btn-success"
                    onClick={() => handleSubmit()}
                >
                    <ShowIconWithLabel label="Aceptar" type="fas fa-plus"/>
                </button>
                &nbsp;
                <button
                    disabled={error !== ''}
                    type="button"
                    className="btn btn-warning"
                    onClick={() => handleCancel()}
                >
                    <ShowIconWithLabel label="Cancelar" type="fas fa-minus"/>
                </button>
            </div>
        </Fragment>
    );
};

export default AccountEdit;


