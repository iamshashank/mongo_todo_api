const {mongoose} = require('./../db/mongoose');
const {Todo} = require('./../models/todo');
const {ObjectID} = require('mongodb');//to check validity of _id

var id = '5aa7dff730374012b8808841';

if(!ObjectID.isValid(id)){
  console.log('Id not Valid');
}

//retruns a array of Todos
//if nothing found the an empty array []
Todo.find({
  _id:id
}).then((todos)=>{
  console.log(todos);
},(e)=>{
  console.log(e)
});

//only returns the first one
//if nothing found it returns 'null'
Todo.findOne({
  _id:id
}).then((todo)=>{
  if(!todo) return 'Nothing Find ';
  console.log(todo);
},(e)=>{
  console.log(e)
});

//findById
//if nothing found it returns 'null'
Todo.findById(id).then((todo)=>{
  if(!todo) return 'Id not found';
  console.log(todo);});
