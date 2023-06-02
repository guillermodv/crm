import React, { Fragment } from "react";

const AccountData = ({ account }) => (
  <Fragment>
    <div className="col-12">
      <p>
        <span className="font-weight-bold">Ranking:</span> {""}
        <span className="font-italic">{account.ranking}</span>
      </p>
      <p>
        <span className="font-weight-bold">Potencial:</span> {""}
        <span className="font-italic">{account.potential}</span>
      </p>
      <p>
        <span className="font-weight-bold">Tipo:</span> {""}
        <span className="font-italic">{account.type}</span>
      </p>
      <p>
        <span className="font-weight-bold">Servicio:</span> {""}
        <span className="font-italic">{account.service}</span>
      </p>
      <p>
        <span className="font-weight-bold">Estado:</span> {""}
        <span className="font-italic">{account.state}</span>
      </p>
      <p>
        <span className="font-weight-bold">Industria:</span> {""}
        <span className="font-italic">{account.industry}</span>
      </p>
      <p>
        <span className="font-weight-bold">Cuit:</span> {""}
        <span className="font-italic">{account.cuit}</span>
      </p>
      <p>
        <span className="font-weight-bold">Fecha Creacion:</span> {""}
        <span className="font-italic">{account.creationDate}</span>
      </p>
      <p>
        <span className="font-weight-bold">Fecha Modificación:</span> {""}
        <span className="font-italic">{account.ModificationDate}</span>
      </p>
    </div>
  </Fragment>
);

export default AccountData;
