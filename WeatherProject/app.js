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
            const feels = "the weather is currently" + feels_like
            const icon = weatherData.weather[0].icon
            const imgWeather = "http://openweathermap.org/img/wn/" + icon + "@2x.png"
      

            const description = weatherData.weather[0].description

            res.write("<h1>The temperature in Toronto is: " + temp + " degrees Celcius </h1>")
            res.write("<h5>The weather is currently " + description + "</h5>")
            res.write("<img src =" + imgWeather + ">")
            

            // to send multiple html
            res.send()
            // just allows you to send one data
            // res.send("<h1>The temperature in Toronto is: " + temp + " degrees Celcius </h1>")

        })
    })
    // res.send("server is up and running");
})
app.listen(3000, function(){
    console.log("good to go!!");
});