const mongodb = require('mongodb');

const MongodbClient = mongodb.MongoClient;

const connectionURL = 'mongodb://127.0.0.1:27017';
const databaseName = 'task-manager';

MongodbClient.connect(connectionURL, { useNewUrlParser: true, useUnifiedTopology: true }, (error, client) => {
    if (error) {
        console.log('Unable to connect with database');
    }

    const db = client.db(databaseName);

    db.collection('users').insertOne({
        name: 'Yuri',
        age: 21
    });
});