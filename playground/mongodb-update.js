const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;
// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'TodoApp';

// Create a new MongoClient
const client = new MongoClient(url, {
    useNewUrlParser: true
});

// Use connect method to connect to the Server
client.connect(function (err) {
    if (err) {
        return console.log('Unable to connect to Database.');
    }
    console.log('Connected successfully to server');

    const db = client.db(dbName);

    db.collection('Users')
        .findOneAndUpdate({
            _id: new ObjectID('5c1d5e94cb643242fca5cd81')
        }, {
            $set: {
                location: "Delhi"
            }
        }, {
            returnOriginal: false
        })
        .then(result => {
            console.log(result);
        });

    //client.close();
});