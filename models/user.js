var mongoose = require('mongoose');
var User = mongoose.model('User',{
  email:{
    type:String,
    required:true,
    trim:true,
    minlength:1
  }
});
//STEP 1
//create a model
//Table ==> collection
//row == > document
//Each Todo document has 3 fields (text,completed,completedAt)
//below act as a Constructor

//User model

// var newUser = new User({
//   email:'shashank0x1@yahoo.com  '
// });
// newUser.save().then((doc)=>console.log(doc),(e)=>console.log(e));


module.exports = {User};
