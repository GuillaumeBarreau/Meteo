import React from 'react';
import PropTypes from "prop-types";
import './AtmosphericConditionItem.css';
import { Icon } from '../Icon';
import { Typography } from '../Typography';

export const AtmosphericConditionItem = (props) => {

    const { value, icon, description, unit } = props.atmosphericCondition;

    return (
        <li className="AtmosphericConditionItem-container">
            <div className="AtmosphericConditionItem-container_contentTop">
                <Icon type={icon} />
                <Typography variant="small">{`${value || 0} ${unit}`}</Typography>
            </div>
            <Typography>{description}</Typography>
        </li>
    );
};

AtmosphericConditionItem.defaultProps = {
    description: 'description not found',
    icon: 'icon',
    value: 0,
    city: 'not found'
}

AtmosphericConditionItem.propTypes = {
    description: PropTypes.string,
    icon: PropTypes.string,
    value: PropTypes.number,
    city: PropTypes.string,
};