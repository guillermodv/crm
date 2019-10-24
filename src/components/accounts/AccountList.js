import React, {Fragment} from 'react';
import {Link} from "react-router-dom";
import {Pagination, Showing} from "../commons";

const AccountTable = ({accounts = []}) => (
    <Fragment>
        <table className="table table-striped mt-4">
            <thead className="text-light bg-primary">
            <tr>
                <th>Cuenta</th>
                <th>Ranking</th>
                <th>Potencial</th>
                <th>Tipo</th>
                <th>Servicio</th>
                <th>Herramientas</th>
            </tr>
            </thead>
            <tbody>
            {accounts.map(account => (
                <tr key={account._id}>
                    <td>{account.name}</td>
                    <td>{account.ranking}</td>
                    <td>{account.potential}</td>
                    <td>{account.type}</td>
                    <td>{account.service}</td>
                    <td>
                        <Link
                            to={`/account/show/${account._id}`}
                            className="btn btn-success"
                        >
                            <i className="fa fa-pencil"></i>
                        </Link>
                        {' '}
                        <button
                            type="button"
                            className="btn btn-danger"
                            onClick={() => null}
                        >
                            <i className="fas fa-trash-alt"></i>
                        </button>
                    </td>
                </tr>
            ))}
            </tbody>
        </table>
        <Pagination/>
        <Showing collection={accounts}/>
    </Fragment>
);

export default AccountTable;