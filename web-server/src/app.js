const path = require('path');
const express = require('express');

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
    res.send({
        location: 'São Paulo',
        forecast: {
            temperature: 24.34,
            summary: 'TA FRIO E CALOR AO MESMO TEMPO PORRA'
        }
    })
})



app.get('*', (req, res) => {
    res.send('Nao achei porra nenhuma')
})

app.listen(3000);