const express  = require("express");
const app = express();

app.get("/",function (request,response){
  console.log(request);
  response.send("<h1>Hello, World!</h1>");
});

app.get("/contact", function (req,res){
    res.send("Contact me at joanbelk2@gmail.com");
});

app.get("/about", function (req,res){
    res.send("My name is Joanbelk and I want to be a super developer");
});
app.listen(3000, function (){
  console.log("Server started on port 3000");
});
