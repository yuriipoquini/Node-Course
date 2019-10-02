import geocode from "./utils/geocode.mjs";
import forecast from "./utils/forecast.mjs";

geocode('Ibiúna', (error, { latitude, longitude, location}) => {
    if (error) {
        return console.log('ERROR :(');
    }

    forecast(latitude, longitude, (nError, nData) => {
        if (nError) {
            return console.log('ERROR :(');
        }

        console.log(location);
        console.log(nData);
    })
})