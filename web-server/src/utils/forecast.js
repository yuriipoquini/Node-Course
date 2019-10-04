const request = require('request');

const forecast = (latitude, longitude, callback) => {

    const url = `https://api.darksky.net/forecast/3689980556a03b0b346815ebeb9228b6/${latitude},${longitude}?units=si&lang=pt`;
    
    request({ url, json: true }, (error, {body}) => {
        if (error) {
            callback('Error to connect to weather service!');
        } else if (body.error) {
            callback('Error to find local weather!! Try another one please!');
        } else {
        const bodyCurrently = body.currently;

        callback(undefined, body.daily.summary + ' Está aproximadamente ' + bodyCurrently.temperature + 'ºC e temos ' + bodyCurrently.precipIntensity + '% de chance de chuva!')

        }
    })
}

module.exports = forecast;