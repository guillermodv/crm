import React, {Fragment, useState} from 'react';
import {isEmpty} from 'lodash';

import {LoadingIndicator, Title} from "../commons";
import {EVENTS, EVENTS_TYPE} from "../../const"
import EventsTable from "./EventsTable";
import SelectWithLabel from "../commons/SelectWithLabel";

const EventList = () => {
    const [ event, setEvent ] = useState({});

    const handleChange = ({target: {name, value}}) => {
        setEvent({...event, [name]: value});
    };
    return (
        <Fragment>
            <Title label={"Eventos"}/>
            {isEmpty(EVENTS) && (<LoadingIndicator/>)}
            <div className="card mx-2 mb-1">
                <div className="row mx-1">
                    <div className="col-12">
                        <label>Descripción:</label>
                        <input
                            type="text"
                            className="form-control"
                            name="description"
                            placeholder="Descripción..."
                            required
                            onChange={(e) => handleChange(e)}
                        />
                    </div>
                </div>
                <div className="row mx-1">
                    <div className="col-4">
                        <label>Tipo Evento:</label>
                        <SelectWithLabel defaultLabel={"Seleccione..."} items={EVENTS_TYPE} />
                    </div>
                    <div className="col-4">
                        <label>Usuario:</label>
                        <input
                            type="text"
                            className="form-control"
                            name="user"
                            placeholder="Usuario..."
                            required
                            onChange={(e) => handleChange(e)}
                        />
                    </div>
                    <div className="col-4">
                        <label>Usuario:</label>
                        <input
                            type="date"
                            className="form-control"
                            name="date"
                            required
                            onChange={(e) => handleChange(e)}
                        />
                    </div>
                </div>
                <div className="mx-2 my-2 text-right">
                    <input type="submit" value="Agregar Evento" onClick={() => alert("¿Desea agregar un evento?")} className="btn btn-success"/>
                </div>
            </div>
            {!isEmpty(EVENTS) && (<EventsTable items={EVENTS}/>)}
        </Fragment>
    );
};

export default EventList;

