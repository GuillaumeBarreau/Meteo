import React from "react";
import PropTypes from "prop-types";

import {
    Fleche,
    FlecheFleche,
    Pluie,
    PluieFleche
} from './exportIcons.js';

export const iconType = {
    Fleche: Fleche,
    FlecheFleche: FlecheFleche,
    Pluie: Pluie,
    PluieFleche: PluieFleche
};

export const Icon = (props) => {

    const { type } = props;

    const IconComponent = iconType[`${type}`];

    return (
        <IconComponent />
    );
};

Icon.defaultProps = {
    type: 'Fleche',
};

Icon.propTypes = {
    type: PropTypes.string,
};
