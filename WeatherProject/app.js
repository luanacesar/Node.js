const express = require("express");
const https = require("https");


const app = express();
app.get("/", function(req, res){
    const url ="https://api.openweathermap.org/data/2.5/weather?q=Toronto&units=metric&appid=8d25671c5721348952c1c640fcf80f4f";

    https.get(url, function(response){
    console.log(response.statusCode);

        response.on("data",function(data){
            const weatherData = JSON.parse(data)

            const temp = weatherData.main.temp
            const feels_like = weatherData.main.feels_like
            const description = weatherData.weather[0].description
            
            console.log(temp); 
            console.log(feels_like); 
            console.log(description); 
        })
    })
    res.send("server is up and running");
})
app.listen(3000, function(){
    console.log("good to go!!");
});