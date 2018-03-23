const express=require('express');

var app=express();

app.get('/',(req,res)=>{
  // res.status(400).send('Hello World!');
  res.status(404).send({
    error: 'Page not found.'
  });
});

app.get('/user',(req,res)=>{
  res.send([{
    name:'sudipta',
    age: 23
  },{
    name:'Rifat',
    age:24
  },{
    name:"Andrew Mike",
    age:28
  }
]);
});



app.listen(3000,()=>{
  console.log('Server started with 3000 port');
});

module.exports.app=app;
