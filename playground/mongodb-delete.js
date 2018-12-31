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
client.connect(function(err) {
  if (err) {
    return console.log('Unable to connect to Database.');
  }
  console.log('Connected successfully to server');

  const db = client.db(dbName);

  // db.collection('Users').deleteMany({
  //     name: 'Sandipan'
  //   })
  //   .then((result) => {
  //     console.log(result)
  //   });

  // db.collection('Todos').deleteOne({
  //   text: 'Have Drinks'
  // }).then((result) => {
  //   console.log(result)
  // });

  // db.collection('Users').findOneAndDelete({
  //   _id: new ObjectID("5c1d5f20e35c0c3d888c2481")
  // }).then((result) => {
  //   console.log(result);
  // })

  db.collection('Todos')
    .findOneAndUpdate(
      {
        _id: new ObjectID('5c28105ca673a549d45a3356')
      },
      {
        $set: { completed: true }
      },
      { returnOriginal: false }
    )
    .then(result => {
      console.log(result);
    });

  //client.close();
});
