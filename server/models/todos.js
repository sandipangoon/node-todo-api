var mongoose = require('mongoose')

var todoSchemas = new mongoose.Schema({
    text: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    },
    completed: {
        type: Boolean,
        default: false
    },
    completedAt: {
        type: Number,
        default: null
    }
});

var Todo = mongoose.model('Todo', todoSchemas);

module.exports = {
    Todo
};