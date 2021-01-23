//jshint esversion:6

const express = require("express");
const app = express();


app.get("/", function(request, response){
 response.sendFile(__dirname + "/index.html");
});

app.listen(3000, function()
{
    console.log("it is working");
});


