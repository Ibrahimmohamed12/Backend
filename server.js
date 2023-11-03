const express = require('express');
const mongoose = require('mongoose');

let app = express();

async function connect(){
    let connection =  await mongoose.connect('mongodb://0.0.0.0:27017/Users');
    if (!connection) {
     console.log('noo')
    } else {
     console.log('good')
    }
 } connect()

  const studentSchema = new mongoose.Schema({
    name : String,
    age : Number,
    phone : String,
    Address :String,
    Bio : String
  });

  let studentModel = new mongoose.model("Students",studentSchema);

  const coursesSchema = new mongoose.Schema({
    name : String,
    description : String,
    price : String,
    duration : String 
  });

  let coursesModel = new mongoose.model("Courses",coursesSchema);

  let newUser = new studentModel({
   name : "Ibrahim Mohamed",
   age : 22,
   phone : "+201228653538",
   Address : "3st M5 D2",
   Bio : "backend"

  }).save();

  let IbrahimUser = new coursesModel({

   name : "AI",
   description : "Artificial Intelligence",
   price : "650.le",
   duration : "30.d"

  }).save();

 app.get('/Users', async (req , res)=>{
    let allUsers = await studentModel.find();
    res.status(200);
    res.json(allUsers);
    console.log(allUsers.length);
 })

app .listen(3000, function(){
    console.log('server now is opend')
})