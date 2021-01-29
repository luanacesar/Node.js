const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({extended:true}));


    app.get("/", function(req, res){
    res.sendFile(__dirname + "/index.html")
    })

    app.post("/", function(req,resp){
        const query = req.body.cityName;
        const apikey = "8d25671c5721348952c1c640fcf80f4f";
        const unit = "metric";
        const url = "https://api.openweathermap.org/data/2.5/weather?q=" + query + "&appid=" + apikey + "&units=" + unit;

            https.get(url, function(response){
                 console.log(response.statusCode);

                response.on("data",function(data){
                    const weatherData = JSON.parse(data);
                    const temp = weatherData.main.temp;
                    const description = weatherData.weather[0].description;
                    const icon = weatherData.weather[0].icon;
                    const imgWeather = "http://openweathermap.org/img/wn/" + icon + "@2x.png";
                  
                    console.log(query);
                    resp.write("<h1>The temperature in " + query + " is: " + temp + " degrees Celcius </h1>");
                    resp.write("<h5>The weather is currently " + description + "</h5>");
                    resp.write("<img src =" + imgWeather + ">");
                    
                    // to send multiple html
                    resp.send()
                    // just allows you to send one data
                    //   resp.send("<h1>The temperature in " + query  + "</h1>")
                });
            });
        });
    // res.send("server is up and running");
    app.listen(3000, function(){
        console.log("good to go!!");
    });