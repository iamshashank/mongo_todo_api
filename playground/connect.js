//first we need to connect to mongo db for that we ned mongoClient
const {MongoClient,ObjectID} = require('mongodb');

//node aside
//create new object id
//var id = new ObjectID()


//STEP 1
//now we connect
//we need url for the connection
//we dont need to create a new db first
//the below url will create and automaticaly connect
MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
  if(err){
    return console.log("Unable to connect to mongdb");
  }
  console.log("Successfully Connected");
  //STEP 2
  //create table
  //in NoSQL DB like mongo we dont call it Table but collection
  //our to do app will have 2 collection todos,users
  //_is is made of Timestamp,MachineID.ProcessID,randomString
  db.collection('Todos').insertOne({
    text:'Someting to do',
    completed:false
  },(err,result)=>{
    if(err) return console.log('Unable to insert todo',err);
    //console.log(result);
    console.log(JSON.stringify(result.ops,undefined,2));
  })
db.collection('Users').insertOne({
  name:'Shashank',
  age:23,
  location:'Noida'
},(err,result)=>{
  if(err) return console.log('Unable to insert data',err);
  console.log(JSON.stringify(result.ops,undefined,2));

  console.log(result.ops[0]._id.getTimestamp());
})

  db.close();
});
