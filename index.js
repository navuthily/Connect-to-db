var express = require('express');
const app = express();
require('dotenv').config();
const port = process.env.PORT;
const MONGODB_URL = process.env.MONGODB_URL;
console.log(MONGODB_URL);
var mongoose = require('mongoose');
const fs = require('fs');
const dotenv = require('dotenv');
const config = require('./config');
//const config = require('dotenv').config();
let name = config.name;
let age = config.age;
var db = mongoose.connection;
require('dotenv').config();
mongoose.Promise = global.Promise;
try {
  mongoose.connect(MONGODB_URL, function () {
    //
    db.collection('name').insertMany([{
      name: "Anh", age: 17
    },{name,age}])
  })
  console.log('oke');
}
 catch(error) {
    console.log('error when connect');
  }
app.listen(port, () => console.log(`Example app listening on port ${port}!`));