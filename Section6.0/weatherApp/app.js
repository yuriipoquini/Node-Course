const request = require('request');
const chalk = require('chalk');
const geocode = require('./utils/geocode');


const darkskyURL = 'https://api.darksky.net/forecast/3689980556a03b0b346815ebeb9228b6/37.8267,-122.4233?units=si&lang=pt'

const geocodeURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Chapada%20Diamantina.json?access_token=pk.eyJ1IjoieXVyaWlwb3F1aW5pIiwiYSI6ImNqemx6MHh1bDA0NzYzbG10cmlka2puNWEifQ.V0TVYS_Hzf4qJUiruJZGFA&limit=1'

// request({ url: darkskyURL, json: true }, (error, response) => {

//     if (error) {
//         console.log('Unable to connect to weather service');
//     } else if (response.body.error) {
//         console.log('Unable to find location');
//     } else {
//         const bodyCurrently = response.body.currently;

//         console.log(response.body.daily.data[0].summary + ' It is currently ' + bodyCurrently.temperature + ' degress out and there is a ' + bodyCurrently.precipIntensity + '% chance of rain');
//     }
// });


// geocode('Suzano', (error, data) => {
//     console.log(chalk.inverse('***********************************************'));
//     console.log(chalk.red.inverse('Error:'));
//     console.log(error);
//     console.log(chalk.inverse('***********************************************'));
//     console.log(chalk.green.inverse('Data:'));
//     console.log(data);
//     console.log(chalk.inverse('***********************************************'));
// })


//
// Goal: Create a reusable function for getting the forecast
//
// 1. Setup the "forecast" function in utils/forecast.js
// 2. Require the function in app.js and call it as shown below
// 3. The forecast function should have three potential calls to callback:
//    - Low level error, pass string for error
//    - Coordinate error, pass string for error
//    - Success, pass forecast string for data (same format as from before)

forecast(-75.7088, 44.1545, (error, data) => {
    console.log('Error', error)
    console.log('Data', data)
})