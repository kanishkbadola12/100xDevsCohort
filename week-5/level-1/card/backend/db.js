const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://kanishkbadola5:mymongodb12@cluster0.omq1pu6.mongodb.net/cards?retryWrites=true&w=majority');

//Check if connection is successful
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
    console.log("Connected successfully");
});

const cardSchema = mongoose.Schema({
    name: String,
    description: String,
    socialMedia: {
        twitter: String,
        linkedin: String,
        facebook: String
    },
    interests: Array
});

const cardModel = mongoose.model('cardModel', cardSchema);

module.exports = {
    cardModel
}