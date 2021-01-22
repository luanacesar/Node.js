//jshint esversion:6

const express = require("express");
const app = express();
app.get("/", function(request, response){
    response.send("<h1>Hello world</h1>");
});
app.get("/contact", function(req,res){
    res.send("contact me at: luana_cesar@hotmail.com");
});

app.get("/about", function(rq,re){
    re.send("<p>Hello, my name is Luana and I am a software developer. </p>");
});

app.get("/location", function(request,response){
    response.send("<p>We are located in downtown of Toronto</p>")
})

app.listen(3000, function(){
    console.log("Server started on port 3000");
});