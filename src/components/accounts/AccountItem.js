import React, {useState, useEffect, Fragment} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Link} from 'react-router-dom';
import {isEmpty} from 'lodash';

import {ADRESSCONTENT, CONTACTSCONTENT, NOTESCONTENT} from "../../const";
import AccountCard from "./AccountCard";
import {ShowIconWithLabel, GenericsTable, NotesTable, Error} from "../commons";
import {requestAccount, requestRemoveAccount} from "../../actions/accounts";

const AccountItem = (props) => {
    const dispatch = useDispatch();
    const account = useSelector(state => state.accounts.account);
    const [notes, setNotes] = useState(NOTESCONTENT);
    const [title, setTitle] = useState('');
    const [note, setNote] = useState('');
    const [error, setError] = useState('');

    useEffect(() => {
        dispatch(requestAccount(props.match.params.id));
    }, [props.match.params.id, dispatch]);

    function handleRemove() {
        dispatch(requestRemoveAccount(account._id));
        return props.history.push('/accounts');
    }

    const handleChangeTitle = ({target: {value}}) => {
        setTitle(value);
    };

    const handleChangeNotes = ({target: {value}}) => {
        setNote(value);
    };

    const handleButton = () => {
        if(!isEmpty(title) && !isEmpty(note)){
            const newNote = {
                "_id": '4',
                "name": title,
                "description": note,
                "date": 'a date'
            };
            const newNotes = notes;
            newNotes.push(newNote);
            setNotes(newNotes);
        } else {
            setError("Ingrese titulo y descripción a la nota");
        }
    };

    return (
        <Fragment>
            {account && <Fragment>
                <div className="row mt-1">
                    <div className="col-6">
                        <h4 className="ml-3">{account.name}</h4>
                    </div>
                    <div className="col-6 text-right">
                        <div className="mx-2">
                            <Link to="/accounts" className="btn btn-secondary">
                                <ShowIconWithLabel label={"Volver Al Listado"} type={"fas fa-arrow-circle-left"}/>
                            </Link>
                            &nbsp;
                            <Link to={`/account/edit/${account._id}`} className="btn btn-primary">
                                <ShowIconWithLabel label={"Editar Cuenta"} type={"fas fa-pencil-alt"}/>
                            </Link>
                            &nbsp;
                            <button
                                type="button"
                                className="btn btn-danger"
                                onClick={() => handleRemove()}
                            >
                                <ShowIconWithLabel label="Borrar" type="fas fa-trash-alt"/>
                            </button>
                        </div>
                    </div>
                </div>
                <AccountCard account={account}/>
            </Fragment>}
            <br/>
            <div className="mx-2">
                <div className="input-group input-group-default">
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="inputGroup-sizing-default">Titulo Nota.</span>
                    </div>
                    <input
                        type="text"
                        className="form-control"
                        aria-label="Large"
                        aria-describedby="inputGroup-sizing-sm"
                        onChange={(e) => handleChangeTitle(e)}
                    />
                </div>
                <div className="input-group mb-3">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Escribe algo..."
                        aria-label="Recipient's username"
                        onChange={(e) => handleChangeNotes(e)}
                        aria-describedby="basic-addon2"/>
                </div>
                <div className="text-right">
                    <button
                        className="btn btn-light"
                        onClick={() => handleButton()}
                        type="button">
                        Adjuntar Documento
                    </button>
                    <button
                        className="btn btn-light"
                        onClick={() => handleButton()}
                        type="button">
                        Agregar
                    </button>
                </div>
            </div>
            <br/>
            {!(error === '') && <Error label={error}/>}
            <br/>
            <NotesTable items={notes} showId={false} showDate={true} hshowTools={false}/>
            <div id="accordion">
                <div className="card mx-2">
                    <div className="card-header" id="headingOne">
                        <h5 className="mb-0">
                            <button className="btn btn-link" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                Direcciones
                            </button>
                        </h5>
                    </div>
                    <div id="collapseOne" className="collapse collapsed" aria-labelledby="headingOne"
                         data-parent="#accordion">
                        <div className="card-body">
                            <GenericsTable items={ADRESSCONTENT}   showId={false}  showPagination={false}/>
                        </div>
                    </div>
                </div>
                <br/>
                <div className="card mx-2">
                    <div className="card-header" id="headingOne">
                        <h5 className="mb-0">
                            <button className="btn btn-link" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                Contactos
                            </button>
                        </h5>
                    </div>
                    <div id="collapseOne" className="collapse collapsed" aria-labelledby="headingOne"
                         data-parent="#accordion">
                        <div className="card-body">
                            <GenericsTable items={CONTACTSCONTENT}  showId={false}  showDate={false}/>
                        </div>
                    </div>
                </div>
            </div>
            <br/>
        </Fragment>
    );
};

export default AccountItem;