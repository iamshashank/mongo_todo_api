var mongoose = require('mongoose');

var Todo = mongoose.model('Todo',{
  text:{//configure each coloumn
    type:String,
    required:true, //optional
    minlength:1,
    trim:true
  },
  completed:{
    type:Boolean,
    default:false
  },
  completedAt:{
    type:Number,
    default:null
  }
});
//STEP 1
//create a model
//Table ==> collection
//row == > document
//Each Todo document has 3 fields (text,completed,completedAt)
//below act as a Constructor

 //
 // var newTodo = new Todo({
 //   text:'Cook Dinner'
 // });
 //
 // newTodo.save().then((res)=>{
 //   console.log(res);  //actual document that is saved
 // },(err)=>{
 //   console.log(err);
 // });

module.exports ={Todo};
