// app/models/semesters.js
// grab mongoose module
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var subjects = new Schema({
    subjectName: String,
    subjectId: String,
    studentId: String
})
// define student model
// module.export allows us to pass this to other files when it is called.
module.exports = mongoose.model('Subjects', subjects);
