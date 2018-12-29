const MongoClient = require('mongodb').MongoClient;

// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'TodoApp';

// Create a new MongoClient
const client = new MongoClient(url, { useNewUrlParser: true });

// Use connect method to connect to the Server
client.connect(function(err) {
  if (err) {
    return console.log('Unable to connect to Database.');
  }
  console.log('Connected successfully to server');

  const db = client.db(dbName);
  /* db.collection('Todos').insertOne(
    {
      text: 'todo something',
      completed: false
    },
    (err, result) => {
      if (err) {
        return console.log('Unable to insert data.', err);
      }

      console.log(JSON.stringify(result.ops));
    }
  ); */

  db.collection('Users').insertOne(
    {
      name: 'Sandipan Goon',
      location: 'Noida'
    },
    (err, result) => {
      if ((err, result)) {
        if (err) {
          return console.log('Unable to insert data to Users.', err);
        }
      }

      console.log(result.ops[0]._id.getTimestamp());
    }
  );

  client.close();
});
