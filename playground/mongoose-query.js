const {
    ObjectID
} = require('mongodb');
const {
    mongoose
} = require('./../server/db/mongoose');
const {
    Todo
} = require('./../server/models/todos');

const {
    User
} = require('./../server/models/users');

var id = '5c2d737c24198f344487c383';

// if (!ObjectID.isValid(id)) {
//     console.log('Id not valid');
// }
// Todo.find({
//     _id: id
// }).then((todos) => {
//     console.log('Todos', todos);
// });

// Todo.findOne({
//     _id: id
// }).then((todo) => {
//     console.log('Todo', todo);
// });

// Todo.findById(id).then((todo) => {
//     if (!todo) {
//         return console.log('Id not found');
//     }
//     console.log('Todo', todo);
// }).catch((e) => {
//     console.log(e);
// });

User.findById(id).then((user) => {
    if (!user) {
        return console.log('User not found');
    }
    console.log('User', user);
}).catch((e) => {
    console.log(e);
});