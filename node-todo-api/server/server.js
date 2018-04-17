var mongoose = require('mongoose');

mongoose.Promise= global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp4');

var Todo=mongoose.model('Todo',{
    text:{
        type:String,
        required:true,
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

var user=mongoose.model('User',{
    email:{
        type:String,
        required:true,
        minlength:1,
        trim:true
    }
});


var newUser=new user({
    email:' uadayghosh@gmail.com '
});

newUser.save().then((doc)=>{
    console.log(`Save User ${doc}`);
},(e)=>{
    console.log(`Unable to save user ${e}`);
});


var newTodo=new Todo({
    text: 'Cook dinner'
});

// newTodo.save().then((doc)=>{
//     console.log(`Save todo ${doc}`);
// },(e)=>{
//     console.log('Unable to save todo');
// });


var newTodo2 = new Todo({
    text: ' Edit the work '
});

// newTodo2.save().then((doc)=>{
//     console.log(`Save todo ${doc}`);
    
// },(e)=>{
//     console.log('Unable to save todo',e);
// });