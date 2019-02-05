var express = require('express');
var bodyParser = require('body-parser');

var {
  mongoose
} = require('./db/mongoose');

var {
  Todo
} = require('./models/todos');
var {
  User
} = require('./models/users')

var app = express();
app.use(bodyParser.json());

app.listen(3000, () => {
  console.log('Started todo server on port 3000.')
})

app.post('/todos', (req, res) => {
  console.log(req.body);

  var todo = new Todo({
    text: req.body.text
  });

  todo.save().then((doc) => {
      console.log('Saved Todo', JSON.stringify(doc, undefined, 2));
      res.send(doc);
    },
    e => {
      console.log('Unable to save data', e);
      res.status(400).send(e);
    }
  );
});

app.get('/todos', (req, res) => {

  console.log('Get API /todos');
  Todo.find().then((todos) => {

    res.send({
      todos
    });
  }, (err) => {
    res.status(400).send(err);
  });
});

// var newTodo = new Todo({
//   text: ' Edit Video     '
// });

// newTodo.save().then(
//   doc => {
//     console.log('Saved Todo', JSON.stringify(doc, undefined, 2));
//   },
//   e => {
//     console.log('Unable to save data', e);
//   }
// );