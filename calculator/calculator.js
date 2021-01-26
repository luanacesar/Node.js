//jshint esversion:6

const express = require("express");
// retrive data from front-end
const bodyParser = require("body-parser");
const { response } = require("express");

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


//BMI CALCULATOR

app.get("/bmicalculator", function(req,res){
    res.sendFile(__dirname + "/bmiCalculator.html");
});

app.post("/bmiCalculator", function(req,res){
var we = Number(req.body.we);
var he = Number(req.body.he);

// console.log(we);
//calculate
var total =  we / (he * he);
res.send("Your BMI is" + total);
});

app.listen(3000, function()
{
    console.log("it is working");
});








