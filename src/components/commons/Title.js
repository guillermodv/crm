import React from 'react';
import PropTypes from 'prop-types';

const Title = ({label}) => (
    <div className="col-md-8">
        <h2>
            <i className="fas fa-users"></i> {label}
        </h2>
    </div>
);

Title.propTypes = {
    label: PropTypes.string
};

Title.defaultProps = {
    label: 'titulo'
};

export default Title;
