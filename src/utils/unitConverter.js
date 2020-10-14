export const kelvinToCelsiusConversion = (kelvinUnit) => {
    const celsius = kelvinUnit - 273.15;
    return celsius;
}

export const MSToKMConversion = (speed) => {
    const km = speed * 3.6;
    return km;
}

export const timestampToTimeConversion = (timestamp) => {
    const date = new Date(timestamp * 1000).toDateString();
    return date
}
