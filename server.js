const express =require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({extended:true}));

app.use(express.static("public"));

app.get("/", function(req,res){
    res.sendFile(__dirname +"/index.html");
})

app.get("/breakout", function(req,res){
    res.sendFile(__dirname +"/breakout.html");
})
app.get("/block", function(req,res){
    res.sendFile(__dirname + "/block.html");
})
app.get("/galactic", function(req,res){
    res.sendFile(__dirname + "/galactic.html");
})
app.listen(process.env.PORT || 8000, function(){
    console.log("server started");
});