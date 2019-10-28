import React from 'react';
import {Pagination, ShowIcon, Showing} from "../commons";

const NotesTable = ({items = [], showDate = false , showId = true, showPagination = false, showTools = true}) => (
    <div className="mx-2">
        <table className="table table-striped align-content-center border-bottom" style={{'font-size': '14px'}}>
            <thead className="text-light bg-primary">
            <tr>
                {showId && <th className="text-left">Id</th>}
                <th className="text-left">Titulo</th>
                <th className="text-left">Descripción</th>
                {showDate && <th className="text-left">Fecha de Creación</th>}
                <th className="text-center">Adjunto</th>
                {showTools && <th className="text-center">Herramientas</th>}
            </tr>
            </thead>
            <tbody>
            {items.map(item => (
                <tr key={item._id}>
                    {showId && <td className="text-left">{item._id}</td>}
                    <td className="text-left">{item.name}</td>
                    <td className="text-left">{item.description}</td>
                    {showDate && <td className="text-left">{item.date}</td>}
                    <td className="text-center font-weight-bold"><ShowIcon type={"fas fa-save"}/> 2</td>
                    {showTools && <td className="text-center">
                        <button
                            type="button"
                            className="btn btn-success"
                            onClick={() => alert('¿desear modificar?')}
                        >
                            <ShowIcon type={"fas fa-pen"} />
                        </button>
                    </td>}
                </tr>
            ))}
            </tbody>
        </table>
        {showPagination && <Pagination/>}
        {showPagination &&<Showing items={items}/>}
    </div>
);

export default NotesTable;