import request from "request";

const geocode = (address, callback) => {
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${address}.json?access_token=pk.eyJ1IjoieXVyaWlwb3F1aW5pIiwiYSI6ImNqemx6MHh1bDA0NzYzbG10cmlka2puNWEifQ.V0TVYS_Hzf4qJUiruJZGFA&limit=1`;

    request({url, json: true }, (error, {body}) => {
        if (error) {
            callback('Unable to connect to location service');
        } else if (body.features.length === 0) {
            callback('Unable to find location! Please, enter eith another one');
        } else {
            callback(undefined, {
                longitude: body.features[0].center[0],
                latitude: body.features[0].center[1],
                location: body.features[0].place_name
            })
        }
    })
};

export default geocode;