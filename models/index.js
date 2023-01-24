const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const QuizSchema = new Schema({
    quizId: { type: mongoose.Schema.Types.ObjectId, required: true },
    title: { type: String, required: true },
    dateCreated: { type: Date, default: Date.now },
    questions: [{ type: Schema.Types.ObjectId, ref: 'Question' }]
});

const CourseSchema = new Schema({
    courseId: { type: mongoose.Schema.Types.ObjectId, required: true },
    title: { type: String, required: true },
    dateCreated: { type: Date, default: Date.now },
    quizzes: [QuizSchema],
    creator: { type: Schema.Types.ObjectId, ref: 'User' }
});

const UserSchema = new Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, required: true },
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    dateCreated: { type: Date, default: Date.now },
    courses: [{ type: Schema.Types.ObjectId, ref: 'Course' }],
    heatMap: [{ date: Date, activity: Number }]
});

const Quiz = mongoose.model('Quiz', QuizSchema);
const Course = mongoose.model('Course', CourseSchema);
const User = mongoose.model('User', UserSchema);

module.exports = { Quiz, Course, User };
