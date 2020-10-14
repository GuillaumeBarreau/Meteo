import {
    kelvinToCelsiusConversion,
    MSToKMConversion
} from './unitConverter';

export const adapterAtmosphericConditions = (main, wind) => { 
    
    const adapter = [
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

    return adapter
};