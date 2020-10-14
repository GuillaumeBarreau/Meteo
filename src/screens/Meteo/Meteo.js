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
import { adapterAtmosphericConditions } from '../../utils/adapterAtmosphericConditions';
import { kelvinToCelsiusConversion } from '../../utils/unitConverter';
import { listsOfCities } from '../../data/cities';

const Meteo = ({ dispatch, getData, data, loading }) => {

    const [city, setCity] = useState('paris');

    const handleChangeCity = (selectCity) => setCity(selectCity);
    
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
    
    const atmosphericConditions = adapterAtmosphericConditions(main, wind);

    const cities = listsOfCities;
   
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
                    <AtmosphericConditionsWrapper AtmosphericConditions={atmosphericConditions} />
                    </div>
                    <div className="App-container_contentBottom">
                    <Select handleChangeCity={handleChangeCity} cities={cities}>{name}</Select>
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
            lon: PropTypes.number.isRequired,
            lat: PropTypes.number.isRequired,
        }),
        name: PropTypes.string,
        wind: PropTypes.shape({
            speed: PropTypes.number.isRequired,
        }),
        main: PropTypes.shape({
            humidity: PropTypes.number.isRequired,
            pressure: PropTypes.number.isRequired,
            temp: PropTypes.number.isRequired,
        }),
        weather: PropTypes.arrayOf(
            PropTypes.shape({
                main: PropTypes.string.isRequired,
            })
        )
    })
};

const mapStateToProps = (state) => ({
    data: state.data.data,
    loading: state.data.loading,
})

export default connect(mapStateToProps, { getData })(Meteo)