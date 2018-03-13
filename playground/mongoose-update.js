const {mongoose} = require('./../db/mongoose');
const {Todo} = require('./../models/todo');
const {ObjectID} = require('mongodb');//to check validity of _id

var id = '5aa7dff730374012b8808841';

//Todo.remove({}) delete multiple cant pass empty parameter
//Todo.remove({}) will remove all documentts

var id = '5aa7dff730374012b8808841';
Todo.remove({_id:id}).then((res)=>{
  console.log(res); //res.result.ok = 1
                    // res.result.n = 4 ex:4 documemts deleted
});

Todo.findOneAndRemove({_id:'5aa8493788cd467f16f75cae'}).then((res)=>{
  //get the removed document back 'res'
  console.log(res);
});

Todo.findByIdAndRemove({_id:'5aa7df866df1f51ca43dc4ea'}).then((res)=>{
  //get the result back
  console.log(res);
});
