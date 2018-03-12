const {MongoClient} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
  if(err) return console.log('Error Connecting to the dataabse');
  console.log('Connected to the database');

  //deleteMany
  db.collection('Todos').deleteMany({
    text:'Play games'
  }).then((result)=>{
    console.log(result);
  },(err)=>{
    console.log(err);
  });
  //deleteOne
  db.collection('Todos').deleteOne({
    text:'Play Games'
  }); //not necessary to attach callback or promeise
  //findOneAndDelete delete and return the deleted object
  db.collection('Todos').findOneAndDelete({
    text:'Walk the dog'
  }).then((result)=>{
    console.log(result.value);
    console.log(result.ok);
  },(err)=>{

  })

  //db.close();
});
