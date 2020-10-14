import React from 'react';
import PropTypes from "prop-types";
import './AtmosphericConditionsWrapper.css';
import { AtmosphericConditionItem } from '../AtmosphericConditionItem';

export const AtmosphericConditionsWrapper = (props) => {

    const { AtmosphericConditions } = props;
    return (    
        <ul
            className="AtmosphericConditionsContainer"
        >
            {
                AtmosphericConditions.map((atmosphericCondition, index) => 
                    <AtmosphericConditionItem 
                        key={index}
                        {...atmosphericCondition} 
                    />
                )
            }
        </ul>
    );
};

AtmosphericConditionsWrapper.propTypes = {
    AtmosphericConditions: PropTypes.array,
}
