const express = require('express');
const path=require('path');
const mongoose = require("mongoose");

const app=express();
const PORT=8000;

mongoose
  .connect(process.env.MONGO_URL)
  .then((e) => console.log("MongoDB Connected"));

  
app.set("view engine","ejs");
app.set("views",path.resolve("./views"));

app.use("/user", userRoute);
app.use(express.urlencoded({ extended: false }));
app.get('/',(req,res)=>{
    res.render("home");
});

app.listen(PORT,()=>console.log(`Server started at PORT: ${PORT}`)); 