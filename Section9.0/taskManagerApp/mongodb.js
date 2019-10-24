// const mongodb = require('mongodb');
// const MongodbClient = mongodb.MongoClient;
// const ObjectID = mongodb.ObjectId;

const { MongoClient, ObjectID } = require('mongodb');

const connectionURL = 'mongodb://127.0.0.1:27017';
const databaseName = 'task-manager';

MongoClient.connect(connectionURL, { useNewUrlParser: true, useUnifiedTopology: true }, (error, client) => {
    if (error) {
        return console.log('Unable to connect with database');
    }

    const db = client.db(databaseName);

    // db.collection('users').findOne({ _id: new ObjectID("5da8ebfb33925b00d8923901") }, (error, user) => {
    //     if (error) {
    //         return console.log('Value not found. Please try another search!');
    //     }

    //     console.log(user);
    // })

    // db.collection('tasks').find({ completed: false }).toArray((error, tasks) => {
    //     console.log(tasks);
    // });

    // db.collection('users').updateOne({
    //     _id: new ObjectID("5da90831a8de1a3b900489b5")
    // }, {
    //     $set: {
    //         name: 'Miguel'
    //     },
    //     $inc: {
    //         age: 1
    //     }
    // }).then((result) => {
    //     console.log(result);
    // }).catch((error) => {
    //     console.log(error);
    // })

    db.collection('tasks').updateMany({
        completed: false
    }, {
        $set: {
            completed: true
        }
    }).then((result) => {
        console.log(result);
    }).catch((error) => {
        console.log(error);
    })

});