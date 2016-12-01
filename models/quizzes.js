// app/models/semesters.js
// grab mongoose module
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var quizzes = new Schema({
    quizName: String,
    quizId: String,
    subjectId: String
})
// define student model
// module.export allows us to pass this to other files when it is called.
module.exports = mongoose.model('Quizzes', quizzes);
