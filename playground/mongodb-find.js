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

  db.collection('Todos').find({
    "_id": ObjectID('5c204e6476fa84274cb0e694')
  }).toArray().then((docs) => {
    console.log('Todos');
    console.log(JSON.stringify(docs, undefined, 2));
  }, (err) => {
    console.log("Unable to fetch todos", err);
  });

  //client.close();
});