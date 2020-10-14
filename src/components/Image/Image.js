import React from "react";
import PropTypes from "prop-types";
import { 
    Clear,
    Clouds,
    Rain,
    Fog,
    Drizzle,
    Thunderstorm,
    Nothing,
    Snow
} from './exportImages.js';

export const imageType = {
    Clear: Clear,
    Clouds: Clouds,
    Rain: Rain,
    Fog: Fog,
    Drizzle: Drizzle,
    Thunderstorm: Thunderstorm,
    Nothing: Nothing,
    Snow: Snow,
};

export const Image = (props) => {

    const { type } = props;

    const imageUrl = imageType[`${type}`];

    return (
        <img src={imageUrl} alt={type} />
    );
};

Image.defaultProps = {
    type: 'Nothing',
};

Image.propTypes = {
    type: PropTypes.string,
};
