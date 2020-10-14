import React from "react";
import PropTypes from "prop-types";

import Clear from '../../assets/image/Clear.jpg';
import Clouds from '../../assets/image/Clouds.jpg';
import Rain from '../../assets/image/Rain.jpg';
import Fog from '../../assets/image/Fog.jpg';
import Drizzle from '../../assets/image/Drizzle.jpg';
import Thunderstorm from '../../assets/image/Thunderstorm.jpg';
import Nothing from '../../assets/image/Nothing.jpg';

export const imageType = {
    Clear: Clear,
    Clouds: Clouds,
    Rain: Rain,
    Fog: Fog,
    Drizzle: Drizzle,
    Thunderstorm: Thunderstorm,
    Nothing: Nothing,
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
