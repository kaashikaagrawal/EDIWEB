var express = require("express");
var app = express();
var port = 3000;
var bodyParser = require('body-parser');
var cors = require("cors");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors())

var mongoose = require("mongoose");
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:27017/ediweb");
console.log("connected");
var nameSchema = new mongoose.Schema({
    firstName: String,
    foodItem: String
});
var User = mongoose.model("User", nameSchema);

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/recipe.json");
});

app.post("/addname", (req, res) => {
    console.log("Posting Data")
    var myData = new User(req.body)
    myData.save()
        .then(item => {
            res.send("Your recipe details have been saved to database");
        })
        .catch(err => {
            res.status(400).send("Unable to save to database");
        });
});



app.listen(port, () => {
    console.log("Server listening on port 4000");
});