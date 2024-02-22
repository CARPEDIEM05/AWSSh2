const express = require("express");

const app = express();

app.use(express.json());

app.get("/users",(req,res)=>{
    res.send("Everything is working fine");
})


app.listen(8080);