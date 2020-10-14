import React from 'react';
import PropTypes from "prop-types";
import './Select.css';

export const Select = (props) => {

    const { cities, setCity } = props;
    
    return (
        <select
            className="Select-container"
            onChange={(e) => setCity(e.target.value)} 
        >
            { 
                cities.map(city => {
                    return <option key={city} className="Select-container_option">{city}</option> 
                })
            }
        </select>
    );
};

Select.defaultProps = {
    cities: []
}

Select.propTypes = {
    cities: PropTypes.array,
}