const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('mongodb+srv://kanishkbadola5:learning101@cluster0.omq1pu6.mongodb.net/jwt_courses');

//Check if connection is successful
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
    console.log("Connected successfully");
});

// Define schemas
const AdminSchema = new mongoose.Schema({
    username: String,
    password: String
});

const UserSchema = new mongoose.Schema({
    username: String,
    password: String
});

const CourseSchema = new mongoose.Schema({
    id: Number,
    title: String,
    description: String,
    price: Number,
    imageLink: String,
    published: Boolean
});

const PurchasedCoursesSchema = new mongoose.Schema({
    title: String,
    description: String,
    price: Number,
    imageLink: String,
    id: Number
});

const Admin = mongoose.model('Admin', AdminSchema);
const User = mongoose.model('User', UserSchema);
const Course = mongoose.model('Course', CourseSchema);
const PurchasedCourses = mongoose.model('PurchasedCourses', PurchasedCoursesSchema);

module.exports = {
    Admin,
    User,
    Course,
    PurchasedCourses
}