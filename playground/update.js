const {MongoClient} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
  if(err) return console.log('Error Connecting to the dataabse');
  console.log('Connected to the database');

  //findOneUpdate  update the item and return it callback
  db.collection('Todos').findOneAndUpdate({
    text:'Read LN'
  },{
      $set:{
        completed:true
      }
  },{
    returnOriginal:false
  }).then((result)=>{
    console.log(result.value);
  },(err)=>{
    console.log(err);
  });

  db.collection('Users').findOneAndUpdate({
    name:'Shashank'
  },{
    $set:{name:'Shashank Yadav'},
    $inc:{age:26}  //$inc increse by (old+new_Value)
  },{
    returnOriginal:false
  }).then((res)=>{
    console.log(res);
  });

  //db.close();
});
