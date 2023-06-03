import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { Pagination, ShowIcon, Showing } from "../commons";

const AccountTable = ({ accounts = [] }) => (
  <Fragment>
    <table
      className="table table-striped mt-1 align-content-center"
      style={{ "font-size": "12px" }}
    >
      <thead className="text-light bg-primary">
        <tr>
          <th>Cuenta</th>
          <th className="text-center">Ranking</th>
          <th className="text-center">Potencial</th>
          <th className="text-left">Estado</th>
          <th className="text-center">Tipo</th>
          <th className="text-center">Oportunidades</th>
          <th className="text-center">Contactos</th>
          <th className="text-center">Notas</th>
          <th className="text-center">Eventos</th>
          <th className="text-center">Servicio</th>
          <th> </th>
        </tr>
      </thead>
      <tbody>
        {accounts &&
          accounts.map((account) => (
            <tr key={account._id}>
              <td className="text-left">{account.name}</td>
              <td className="text-center">{account.ranking}</td>
              <td className="text-center">{account.potential}</td>
              <td className="text-left">{account.state}</td>
              <td className="text-center">{account.type}</td>
              <td className="text-center">-</td>
              <td className="text-center">-</td>
              <td className="text-center">-</td>
              <td className="text-center">-</td>
              <td>{account.service}</td>
              <td className="text-right">
                <Link
                  to={`/account/show/${account._id}`}
                  className="btn btn-secondary"
                >
                  <ShowIcon type={"fa fa-pencil"} />
                </Link>
              </td>
            </tr>
          ))}
      </tbody>
    </table>
    <Pagination />
    <Showing items={accounts} />
  </Fragment>
);

export default AccountTable;
