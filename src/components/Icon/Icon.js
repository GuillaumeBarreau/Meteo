import React from "react";
import PropTypes from "prop-types";

import { ReactComponent as Fleche } from '../../assets/icon/Fleche.svg';
import { ReactComponent as FlecheFleche } from '../../assets/icon/FlecheFleche.svg';
import { ReactComponent as Pluie } from '../../assets/icon/Pluie.svg';
import { ReactComponent as PluieFleche } from '../../assets/icon/PluieFleche.svg';

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
