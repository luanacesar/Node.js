//jshint esversion:6

const express = require("express");
// retrive data from front-end
const bodyParser = require("body-parser");

const app = express();
// urlencoded and extend
app.use(bodyParser.urlencoded({extended:true}));

app.get("/", function(request, response){
 response.sendFile(__dirname + "/index.html");
});


// to retrive and post 
app.post("/", function(req,resp){
    //retriving 
    var num1 = Number(req.body.num1);
    var num2 = Number(req.body.num2);

    // calculate
    var result = num1 + num2;
// sending/posting
    resp.send("the result is:" + result);
});

app.listen(3000, function()
{
    console.log("it is working");
});








