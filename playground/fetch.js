//first we need to connect to mongo db for that we ned mongoClient
const {MongoClient,ObjectID} = require('mongodb');


//STEP 1
//now we connect
//we need url for the connection
//we dont need to create a new db first
//the below url will create and automaticaly connect
MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db) =>{
  if(err) return console.log('Unable to conect to the db',err);
  console.log('Connection Successfull')

  //STEP 2
  //retruns all the Todos documensts (rows of collections are called document)
  //.find() returns the cursor
  //.toArray() returns a Promise which gives entire document as JSON array
  // db.collection('Todos').find().toArray().then((docs)=>{
  //   console.log(docs);
  // },(err)=>{
  //   console.log('Unable to fetch');
  // });


  //STEP 3
  //query based on completed status of all todos
  // db.collection('Todos').find({completed:false}).toArray().then((docs)=>{
  //   console.log(docs);
  // },(err)=> console.log('Err oroccured'));
  //
  // //fetch by _id
  // db.collection('Todos').find({
  //   _id:new ObjectID('5aa681f42adb741708185b6d')
  // }).toArray().then((docs)=>{
  //   console.log(docs);
  // },(err)=>console.log('Error'));

  db.collection('Todos').find().count().then((count)=>{
    console.log(count);
  },(err)=>{
    console.log('err');
  });

  db.close();
});
