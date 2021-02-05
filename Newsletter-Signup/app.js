//jshint esversion: 6

const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");

const app = express();
// to be able to use css and image
app.use(express.static("public"));

// to use body-parse is necessary to use this line of code
app.use(bodyParser.urlencoded({extended:true}));

app.get("/", function(req,res){
    res.sendFile(__dirname + "/signup.html");
});

app.post("/", function(respo,req){
var firstname = req.body.fname;
var lastname = req.body.lname;
var email = req.body.email;

console.log(firstname, lastname, email);
});


app.listen(3000, function() {
    console.log("Server is running on port 3000")
});