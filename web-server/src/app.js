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
    if (!req.query.address) {
        return res.send({
            error: 'You must need to provide a address'
        });

    }    

    res.send({
        address: req.query.address,
        forecast: {
            temperature: 24.34,
            summary: 'TA FRIO E CALOR AO MESMO TEMPO PORRA'
        }
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