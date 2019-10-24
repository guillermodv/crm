import React, {Fragment} from 'react';

const AccountCard = ({account}) => (
    <Fragment>
        <div className="col-12">
            <p>
                <span className="font-weight-bold">
                    Ranking:
                </span> {''}
                {account.ranking}
            </p>
            <p>
                <span className="font-weight-bold">
                    Potencial:
                </span> {''}
                {account.potential}
            </p>
            <p>
                <span className="font-weight-bold">
                    Tipo:
                </span> {''}
                {account.type}
            </p>
            <p>
                <span className="font-weight-bold">
                    Servicio:
                </span> {''}
                {account.service}
            </p>
        </div>
    </Fragment>
);

export default AccountCard;