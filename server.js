const express = require('express');
const bodyParser = require('body-parser');
const {ObjectID} = require('mongodb');
const _= require('lodash');

//FOR heroku
// 1. heroku create
// 2. heroku addons:create mongolab:sandbox
// 3. const MONGODB_URI = process.env.MONGODB_URI
// 4. git push heroku master
// 5. heroku logs

//MLAB APP for mongodb heroku

var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');

const PORT = process.env.PORT||3000;
var app = express();

//used to parse incoming POST request to parse json object
app.use(bodyParser.json());

//CRUD Operation  create read update delete
//  post /todos is for creating new
// GET /todos to get all Todos
//GET /todos/123 to get a specific todos
//https://mysterious-ocean-90855.herokuapp.com/todos
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

//GET
//get ll the Todos
app.get('/todos',(req,res)=>{
  Todo.find().then((todos)=>{
    res.send({todos});
  },(e)=>{
    res.status(400).send(e)
  });
})

//GET a specific todos
// '/:id/:name' for multiple parameters
app.get('/todos/:id',(req,res)=>{
  if(!ObjectID.isValid(req.params.id)){
    return res.status(404).send();
  }
  Todo.findById(req.params.id).then((todo)=>{
    if(!todo){
      res.sataus(404).send({});
    }
    res.send({todo});
  }).catch((e)=>{
    res.status(400).send();
  });

});


//delete
app.delete('/todos/:id',(req,res)=>{
  if(!ObjectID.isValid(req.params.id)){
    return res.status(404).send();
  }
  Todo.findByIdAndRemove({_id:req.params.id}).then((todo)=>{
    if(!todo){
      return res.status(404).send({});
    }
    res.send(todo);
  }).catch((e)=>{
    res.status(400).send();
  });
});

//update
//mix od GET and post
//req.body has addition info we send
app.patch('/todos/:id',(req,res)=>{
  id = req.params.id;
  //from req.body  we pic 'text' and 'completed' property
  var body = _.pick(req.body, ['text','completed']);
  if(!ObjectID.isValid(id)){
    return res.status(404).send();
  }

  if(_.isBoolean(body.completed) && body.completed){
    body.completedAt= new Date().getTime();
  }else{
    body.completed=false;
    body.completedAt=null;
  }
  //replace entire document body and return the new docemnet
  Todo.findByIdAndUpdate(id,{$set:body},{new:true}).then((result)=>{

    if(!result){
      return res.status(404).send();
    }
    res.send({result});
  }).catch((e)=>{
    res.status(400).send(e);
  });

});


app.listen(PORT,()=>{
  console.log('Server started at ',PORT);
});
