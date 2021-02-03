const express = require("express")
const bodyParser = require("body-parser")
const https = require("https")
const app = express()

// app.get("/", function(resp,req){
//     resp.sendFile(__dirname + )
// })

app.listen(3000, function(){
    console.log("Server is running on port 3000");
})