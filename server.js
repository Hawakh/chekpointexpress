
const express=require("express");
//should require the module date
const Datee=require('./middelware/Date')

const app=express();
const port=4000;

//use css
app.use(express.static(__dirname + "/public"));


//use middle ware
app.use(Datee);

//fichier css
app.get("/public/CSS/Style.css", (req, res) => {
  res.sendFile(__dirname + "/public/CSS/Style.css");
});


app.get("/",(req,res)=>{
res.sendFile(__dirname+"/public/navbar.html")})

app.get("/public/Homepage", (req, res) => {
    res.sendFile(__dirname + "/public/Homepage.html");
  });

app.get("/public/Ourservice",(req,res)=>{
  res.sendFile(__dirname + "/public/Ourservice.html")
});

app.get("/public/Contactus",(req,res)=>
{
  res.sendFile(__dirname +"/public/Contactus.html")
});
  

app.listen(port,err=>{
    err?console.log(err):console.log(`server is runing on port${port}`)
})