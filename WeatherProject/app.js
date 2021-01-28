const express = require("express");
const https = require("https");


const app = express();
app.get("/", function(req, res){
    const url ="https://api.openweathermap.org/data/2.5/find?q=Paris&units=metric&appid=8d25671c5721348952c1c640fcf80f4f";

    https.get(url, function(response){
    console.log(response);
    })
    res.send("server is up and running");
})
app.listen(3000, function(){
    console.log("All good to go");
});