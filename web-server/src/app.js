const path = require('path');
const express = require('express');

const geocode = require('./utils/geocode.js')
const forecast = require('./utils/forecast.js')

const app = express();
const publicDirectoryPath = path.join(__dirname, '../public');

app.set('view engine', 'hbs');
app.use(express.static(publicDirectoryPath));

app.get('/', (req, res) => {
    res.render('index', {
        title: 'Weather App',
        name: 'Yuri Poquini'
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About',
        name: 'Yuri Poquini'
    })
})

app.get('/weather', (req, res) => {
    if (!req.query.address) {
        return res.send({
            error: 'You must need to provide a address'
        });

    }


    address = req.query.address;
    geocode(address, (error, { latitude, longitude, location } = {}) => {
        if (error) {
            return res.send({
                error: 'Failed to find location, please try another one'
            })
        }

        forecast(latitude, longitude, (nError, nData) => {
            if (nError) {
                return res.send({
                    error: 'Failed to find location, please try another one'
                })
            }

            return res.send({
                location,
                forecast: nData
            })
        })
    })
})


app.get('/produtos', (req, res) => {
    if (!req.query.search) {
        return res.send({
            error: 'You need to provide a term'
        });
    }


    res.send({
        products: '[]'
    });
})



app.get('*', (req, res) => {
    res.send('Nao achei porra nenhuma')
})

app.listen(3000);