var express=require('express');
var bodyParser=require('body-parser');

var {mongoose}=require('./db/mongoose');
var {Todo}=require('./models/todo');
var {User}=require('./models/user');





var app=express();

app.use(bodyParser.json());

app.post('/todos',(req,res)=>{
    var todo=new Todo({
        text:req.body.text
    });

    todo.save().then((doc)=>{
        res.status(200).send(doc);
    },(e)=>{
        res.status(400).send(e);
        
    })
});

app.get('/todos',(req,res)=>{
    Todo.find().then((todos)=>{
        res.status(200).send({
            result:todos,
            message:'Successfull',
            status:200
        });
    },(e)=>{
        res.status(400).send(e);
    })
},(e)=>{
    res.status(400).send(e);
});

app.get('/todos/:id',(req,res)=>{
    res.send(req.params);
})


app.listen(3000,()=>{
    console.log('Started on port 3000');
});


// module.exports={app};

// const newTodo=new Todo({
//     text:'Testing Text'
// });

// newTodo.save().then((docs)=>{
//     console.log(JSON.stringify(docs,undefined,2));
// },(e)=>{
//     console.log(`Unable to save new Todo`,e);
    
// });