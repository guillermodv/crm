import React, {Fragment} from 'react';
import {size} from 'lodash';

const Showing = ({collection = [], position = 1}) => (
    <Fragment>
        <h5>Mostrando {position} - {size(collection)} resultados.</h5>
    </Fragment>
);

export default Showing;

