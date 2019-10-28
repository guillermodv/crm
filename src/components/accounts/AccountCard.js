import React from 'react';

const AccountCard = ({account}) => (
    <div className="card mx-2 mt-2">
        <div className="row col-12">
            <div className="col-3">
                <span className="font-weight-bold">
                    Estado:
                </span> &nbsp;
                <span className="font-italic ">{account.state}</span>
            </div>
            <div className="col-3">
                <span className="font-weight-bold">
                    Potencial:
                </span> &nbsp;
                <span className="font-italic ">{account.potential}</span>
            </div>
            <div className="col-3">
                <span className="font-weight-bold">
                    Ranking:
                </span> &nbsp;
                <span className="font-italic ">{account.ranking}</span>
            </div>
            <div className="col-3">
                <span className="font-weight-bold">
                    Tipo:
                </span> &nbsp;
                    <span className="font-italic">
                    <span className="font-italic ">{account.type}</span>
                </span>
            </div>
        </div>
        <div className="row col-12">
            <div className="col-3">
                <span className="font-weight-bold">
                    Oportunidades:
                </span> &nbsp;
                <span className="font-italic ">-</span>
            </div>
            <div className="col-3">
                <span className="font-weight-bold">
                    Contactos:
                </span> &nbsp;
                <span className="font-italic ">-</span>
            </div>
            <div className="col-3">
                <span className="font-weight-bold">
                    Notas:
                </span> &nbsp;
                <span className="font-italic ">-</span>
            </div>
            <div className="col-3">
                <span className="font-weight-bold">
                    Eventos:
                </span> &nbsp;
                <span className="font-italic">
                    <span className="font-italic">-</span>
                </span>
            </div>
        </div>
        <div className="row col-12">
            <div className="col-6">
                <span className="font-weight-bold">
                    CUIT:
                </span> &nbsp;
                    <span className="font-italic">
                    {account.cuit}
                </span>
            </div>
            <div className="col-6">
                 <span className="font-weight-bold">
                    Industria:
                </span> &nbsp;
                <span className="font-italic">
                    {account.industry}
                </span>
            </div>
        </div>
    </div>
);

export default AccountCard;