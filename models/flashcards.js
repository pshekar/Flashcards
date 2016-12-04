// app/models/semesters.js
// grab mongoose module
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var flashcard = new Schema({
    question: String,
    answer: String,
    quizId: String
})
// define student model
// module.export allows us to pass this to other files when it is called.
module.exports = mongoose.model('Flashcard', flashcard);
