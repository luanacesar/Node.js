//jshint esversion: 6

const express = require("express");
const bodyParser = require("body-parser");
const request  = require("request");
app.use(express.static("public"));

const app = express();

app.get("/", function(resp,req){
    resp.sendFile(__dirname + "/signup.html");
});

app.post("/", function(respo,req){
    
})
app.listen(3000, function(){
    console.log("Server is running on port 3000");
});