import { GET_DATA, DATA_ERROR } from './actionsTypes'
import axios from 'axios'

export const getData = (city) => async dispatch => {

    let endpoint;
    switch (city) {
        case 'paris':
            endpoint = `https://api.openweathermap.org/data/2.5/weather?q=Paris&appid=e42ca4b5c4de5ce5717d9e5bb5c1dc8f`
            break;
        case 'london':
            endpoint = `https://api.openweathermap.org/data/2.5/weather?q=London&appid=e42ca4b5c4de5ce5717d9e5bb5c1dc8f`
            break;
        case 'bangkok':
            endpoint = `https://api.openweathermap.org/data/2.5/weather?q=Bangkok&appid=e42ca4b5c4de5ce5717d9e5bb5c1dc8f`
            break;
        default:
            endpoint = `https://api.openweathermap.org/data/2.5/weather?q=Paris&appid=e42ca4b5c4de5ce5717d9e5bb5c1dc8f`
            break;
    }

    try {
        const res = await axios.get(endpoint)
        dispatch({
            type: GET_DATA,
            payload: res.data
        })
    }
    catch (e) {
        dispatch({
            type: DATA_ERROR,
            payload: console.log(e),
        })
    }

}