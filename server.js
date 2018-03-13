const express = require('express');
const bodyParser = require('body-parser');

var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');

const PORT = process.env|3000;
var app = express();

//used to parse incoming POST request to parse json object
app.use(bodyParser.json());

//CRUD Operation  create read update delete
//  post /todos is for creating new
// GET /todos to get all Todos
//GET /todos/123 to get a specific todos
app.post('/todos',(req,res)=>{
  console.log('Received Data: ',req.body); //req.body is a json
  var newTodo = new Todo({text:req.body.text});
  newTodo.save().then((doc)=>{
    console.log('Added : ',doc);
    res.send(doc);
  },(e)=>{
    console.log('Error: BAD REQUEST');
    res.status(400).send('BAD DATA');
  });
});




app.listen(PORT,()=>{
  console.log('Server started at ',PORT);
});
