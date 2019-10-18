const mongodb = require('mongodb');

const MongodbClient = mongodb.MongoClient;

const connectionURL = 'mongodb://127.0.0.1:27017';
const databaseName = 'task-manager';

MongodbClient.connect(connectionURL, { useNewUrlParser: true, useUnifiedTopology: true }, (error, client) => {
    if (error) {
        console.log('Unable to connect with database');
    }

    const db = client.db(databaseName);

    // db.collection('users').insertOne({
    //     name: 'Yuri',
    //     age: 21
    // });

    db.collection('users').insertMany([{
        name: 'Leo',
        age: 20
    }, {
        name: 'Malu',
        age: 21
    }])

    db.collection('tasks').insertMany([{
            description: 'Buy chocolates',
            completed: true
        }, {
            description: 'Eat chocolates',
            completed: false
        }, {
            description: 'Drink water',
            completed: false
        }

    ], (error, result) => {
        if (error) {
            console.log('Unable to insert documents');
        }

        console.log(result.ops);
    })
});