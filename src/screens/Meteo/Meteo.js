import React, { useEffect, useState } from 'react';
import PropTypes from "prop-types";
import './Meteo.css';
import moment from 'moment';
import { AtmosphericConditionsWrapper } from '../../components/AtmosphericConditionsWrapper';
import { Typography } from '../../components/Typography';
import { imageType } from '../../components/Image';
import { Select } from '../../components/Select';
import { connect } from 'react-redux'
import { getData } from '../../store/actions/data.action'
import {
    kelvinToCelsiusConversion,
    MSToKMConversion
} from '../../utils/unitConverter';

const Meteo = ({ dispatch, getData, data, loading }) => {

    const [city, setCity] = useState('paris');

    useEffect(() => {
        getData(city)
    }, [city]);

    const {
        coord,
        name,
        wind,
        main,
        weather,
        dt,
    } = data;

    const adapterAtmosphericConditions = [
        {
            description: "température",
            icon: "Fleche",
            value: parseFloat(kelvinToCelsiusConversion(main && main.temp).toFixed(1)),
            unit: "°C"
        },
        {
            description: "vent",
            icon: "FlecheFleche",
            value: parseFloat(MSToKMConversion(wind && wind.speed).toFixed(1)),
            unit: "km/h"
        },
        {
            description: "humidité",
            icon: "Pluie",
            value: parseInt(main && main.humidity),
            unit: "%"
        },
        {
            description: "pression",
            icon: "PluieFleche",
            value: parseInt(main && main.pressure),
            unit: "hPa"
        },
    ];

    const cities = ['paris', 'london', 'bangkok'];
   
    return (
        <section className="App-container"
            style={{ backgroundImage: `url(${imageType[`${weather && weather[0].main}`]})` }}
        >
            { !loading && 
                <>
                    <div className="App-container_contentTop">
                        <Typography variant="small">Météo</Typography>
                        <Typography variant="small">{`( ${coord && coord.lon} ; ${coord && coord.lat} )`}</Typography>
                    </div>
                    <div className="App-container_contentCenter">
                        <Typography
                            variant="large"
                            component="h1"
                        >
                            {name}
                        </Typography>
                        <Typography  
                            component="h2"
                            variant="medium"
                        >
                                {moment.unix(dt).format('MMMM Do YYYY')}
                        </Typography>
                        <Typography
                            variant="medium"
                        >
                            {`${kelvinToCelsiusConversion(main && main.temp).toFixed(1)} °C`}
                        </Typography>
                        <AtmosphericConditionsWrapper AtmosphericConditions={adapterAtmosphericConditions} />
                    </div>
                    <div className="App-container_contentBottom">
                        <Select setCity={setCity} cities={cities}>{name}</Select>
                    </div>
                </>
            }
        </section>
    );
};

Meteo.propTypes = {
    dispatch: PropTypes.func,
    getData: PropTypes.func.isRequired,
    loading: PropTypes.bool.isRequired,
    data: PropTypes.shape({
        coord: PropTypes.shape({
            lon: PropTypes.number,
            lat: PropTypes.number,
        }),
        name: PropTypes.string,
        wind: PropTypes.shape({
            speed: PropTypes.number,
        }),
        main: PropTypes.shape({
            humidity: PropTypes.number,
            pressure: PropTypes.number,
            temp: PropTypes.number,
        }),
        weather: PropTypes.arrayOf(
            PropTypes.shape({
                main: PropTypes.string,
            })
        )
    })
};

const mapStateToProps = (state) => ({
    data: state.data.data,
    loading: state.data.loading,
})

export default connect(mapStateToProps, { getData })(Meteo)